/* Middleware that returns 404 status for unmapped routes */

module.exports = (req, res) => {
    res.status(404).send({error: 'Unknown Endpoint'})
}