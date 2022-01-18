const axios = require('axios')
const {PRODUCT_API_KEY, PRODUCT_API_URL} = require('./config')

module.exports = {
    /* Returns the product data of the given product name */
    getProductData: async (name) => {
        try {
            const res = await axios.post(PRODUCT_API_URL + "search", {
                query: 'name:' + name,
                num_records: 1
            }, {
                headers: {
                    Authorization: 'Bearer ' + PRODUCT_API_KEY,
                    'Content-Type': 'application/json'
                },
            })

            const data = res.data

            // If no results, return dummy values
            if (!data.records) {
                return null
            }

            return res.data.records[0]
        } catch (err) {
            console.log(err)
        }
    }
}


