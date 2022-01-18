const axios = require('axios')
const {POS_API_KEY, POS_API_URL} = require('./config')

/* Module used for geocoding */
module.exports = {
    /* Returns the geodata of the given location */
    getGeoData: async (location) => {
        const extension = "forward?"

        const params = new URLSearchParams({
            access_key: POS_API_KEY,
            query: location
        })

        const res = await axios.get(POS_API_URL + extension + params)
        const data = res.data.data

        // If no results, return dummy values
        if (data.length === 0) {
            return {
                longitude: 20,
                latitude: 50,
                geoData: null
            }
        }

        // Find likely candidate
        for (let i=0; i<data.length; i++) {
            if (data[i].country_code === "SWE") {
                return {
                    longitude: data[i].longitude,
                    latitude: data[i].latitude,
                    geoData: data[i]
                }
            }
        }

        // No candidate found, return first result
        return {
            longitude: data[0].longitude,
            latitude: data[0].latitude,
            geoData: data[0]
        }
    },

    /* Returns the listings close to given coordinates */
    getNearbyListings: (location, listings, limit) => {
        const getDistance = (source, destination) => {
            return Math.sqrt((Math.pow(destination.longitude-source.longitude,2))+(Math.pow(destination.latitude-source.latitude,2)))
        }

        return listings.sort((a, b) => getDistance(location, a.coords) - getDistance(location, b.coords)).slice(0, limit);
    },

}


