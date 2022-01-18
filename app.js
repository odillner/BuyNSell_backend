const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const routes = require('./routes')
const config = require('./utils/config')
const logger = require('./utils/logger')
const unknownEndpoint = require('./utils/unknownEndpoint')
const errorHandler = require('./utils/errorHandler')
const tokenAuth = require('./utils/tokenAuth')
const multer  = require('multer')
const AWS = require('aws-sdk')
const multerS3 = require('multer-s3');

const {BUCKET_NAME, AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY} = require('./utils/config');

const s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
});

logger.info('connecting to', config.DB_URL)

// Establish database connection
mongoose
    .connect(config.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => logger.info('connected to MongoDB'))
    .catch(err => logger.info('error connecting to MongoDB:', err.message))

// Set up necessary middleware
app.use(cors())
app.use(express.json())
app.use(tokenAuth)
app.use(bodyParser.urlencoded({extended: false}))

morgan.token('body', function (req) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :response-time ms - :res[content-length] byte :body - :req[content-length] byte'))

let storage = multerS3({
    s3: s3,
    bucket: BUCKET_NAME,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

let upload = multer({ storage: storage});
app.post('/api/listings', upload.single('image'), function (req, res, next) {
    next()
})

routes(app)

app.use('/api', (req, res) => {
    return res.status(400).send({error: 'Malformed id'})
})

app.use(express.static('build'))

app.get('*', (req,res) => {
    try {
        res.sendFile(__dirname + '/build/index.html')
    } catch (err) {
        next(err)
    }
})


app.use(errorHandler)
app.use(unknownEndpoint)

module.exports = app