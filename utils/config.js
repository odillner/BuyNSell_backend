require('dotenv').config()

/* Module used for managing environment variables */

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL
const SECRET = process.env.SECRET

const POS_API_KEY = process.env.POS_API_KEY
const POS_API_URL =  process.env.POS_API_URL

const PRODUCT_API_KEY = process.env.PRODUCT_API_KEY
const PRODUCT_API_URL =  process.env.PRODUCT_API_URL

const BUCKET_NAME = process.env.BUCKET_NAME
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY
const AWS_SECRET_ACCESS_KEY =  process.env.AWS_SECRET_ACCESS_KEY

module.exports = {
    PORT, DB_URL, SECRET,
    POS_API_KEY, POS_API_URL,
    PRODUCT_API_KEY, PRODUCT_API_URL,
    BUCKET_NAME, AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY
}
