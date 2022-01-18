const users = require('./controllers/users')
const listings = require('./controllers/listings')
const login = require('./controllers/login')

module.exports = (app) => {
    app.route('/api/listings')
        .get(listings.list)
        .post(listings.create)

    app.route('/api/listings/:id')
        .get(listings.read)
        .put(listings.update)
        .delete(listings.remove)

    app.route('/api/location/:location')
        .get(listings.nearby)

    app.route('/api/location/:latitude/:longitude')
        .get(listings.nearby)

    app.route('/api/search/:type/:query')
        .get(listings.search)

    app.route('/api/search/:query')
        .get(listings.search)

    app.route('/api/users')
        .get(users.getAll)
        .post(users.create)

    app.route('/api/users/:id')
        .get(users.getById)
        .put(users.update)
        .delete(users.remove)

    app.route('/api/login/')
        .post(login.auth)
}
