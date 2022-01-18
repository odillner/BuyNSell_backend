const Listing = require('../models/listing.js')
const ItemRecommender = require('../utils/recommendations.js')
const {getGeoData, getNearbyListings} = require('../utils/geoHelper')
const {getProductData} = require('../utils/productHelper')

// TODO: change location
const recommender = new ItemRecommender(nr_recs=3)

/*
TODO: we can calculate the tf-idf matrix each time an listing is created/updated/deletec etc
       instead of at call-time
*/

module.exports = {
    list: async (req, res, next) => {
        try {
            const listings = await Listing
                .find({})

            res.json(listings)
        } catch (err) {
            next(err)
        }
    },

    create: async (req, res, next) => {
        try {
            const user = req.authUser

            if (!user) {
                let err = new Error('Invalid token')
                err.name = 'AuthenticationError'
                throw err
            }

            const body = req.body

            const listing = new Listing(body)
            listing.user = user.id
            listing.coords = await getGeoData(listing.location)
            listing.product = await getProductData(listing.title)

            const savedListing = await listing.save()
            user.listings = user.listings.concat(savedListing._id)
            await user.save()

            res.status(201).json(listing)


        } catch (err) {
            next(err)
        }

    },

    read: async (req, res, next) => {
        try {
            const id = req.params.id
            const authUser = req.authUser
            let listing = await Listing.findById(id).populate('user').lean()

            if (!listing) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            // FIX
            listing.user.id = listing.user._id.toString()
            listing.id = listing._id.toString()

            const listings = await Listing.find({})

            // get recommendations
            // NOTE: workaround to use 'listing._id.toString()'
            listing.recs = recommender.get_recommendations(listings, listing.id);
            listing.nearby = getNearbyListings(listing.coords, listings, 11).filter(item => (item.id !== listing.id))

            res.json(listing)
            res.end()

            // View tracking TODO: FIX
            listing = await Listing.findById(id)

            if (authUser) {
                let alreadyViewed = false

                listing.views = listing.views.map(view => {
                    if (view.user.equals(authUser.id)) {
                        alreadyViewed = true
                        view.count++;
                    }
                    return view;
                })


                if (!alreadyViewed) {
                    listing.views = listing.views.concat({
                        user: authUser.id,
                        count: 1
                    })
                }
            }

            listing.totalViews++;
            await listing.save()
        } catch (err) {
            next(err)
        }
    },

    nearby: async (req, res, next) => {
        try {
            const coords = (req.params.location) ? await getGeoData(req.params.location)
                : {
                    latitude: req.params.latitude,
                    longitude: req.params.longitude
                }

            const listings = await Listing.find({})

            res.json(getNearbyListings(coords, listings, 10))
        } catch (err) {
            next(err)
        }
    },

    search: async (req, res, next) => {
        try {
            let listings

            if (req.params.type) {
                const regex = {
                        [req.params.type]: {
                            "$regex": req.params.query,
                            "$options": "i"
                        }
                }

                listings = await Listing.find(regex);
            } else {
                const regex = new RegExp(req.params.query.toString(), 'i');

                listings = await Listing.find({
                    $or: [{
                        title: regex
                    }, {
                        desc: regex
                    }, {
                        location: regex
                    }]
                });
            }
            res.json(listings)
        } catch (err) {
            err = new Error('Searching of this type is not implemented yet')
            err.name = 'NotImplementedError'
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const id = req.params.id
            const body = req.body

            const newListing = await Listing.findOneAndUpdate(
                {_id: id},
                body,
                {new: true, useFindAndModify: false, runValidators: true}
            )

            if (!newListing) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }

            res.json(newListing)
            res.end()
        } catch (err) {
            next(err)
        }
    },

    remove: async (req, res, next) => {
        try {
            const id = req.params.id
            const user = req.authUser

            if (!user) {
                let err = new Error('Invalid token')
                err.name = 'AuthenticationError'
                throw err
            }

            const listing = await Listing.findById(id)

            if (!listing) {
                let err = new Error('Resource not found')
                err.name = 'NotFoundError'
                throw err
            }


            if (user.id != listing.user) {
                let err = new Error('Invalid user')
                err.name = 'AuthenticationError'
                throw err
            }

            const deletedListing = await Listing.deleteOne({'_id':id})
            user.listings = user.listings.filter(listing => listing.id !== deletedListing._id)
            await user.save()

            res.status(200).end()
        } catch (err) {
            next(err)
        }
    },
}