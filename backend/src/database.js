import mongoose from 'mongoose'

const database = {
    initialize(DATABASE_URI) {
        return new Promise(function(resolve, reject) {
            mongoose.connect(
                DATABASE_URI, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                },
                function(err, db) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    },
}

module.exports.default = database
module.exports = database