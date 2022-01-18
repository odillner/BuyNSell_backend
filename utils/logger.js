/* Central logging module */

module.exports = {
    info: (...params) => {
        if (process.env.NODE_ENV !== 'test') {
            console.log(...params)
        }
    },

    error: (...params) => {
        if (process.env.NODE_ENV !== 'test') {
            console.error(...params)
        }
    }
}