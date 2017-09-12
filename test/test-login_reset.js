const mongoose = require('mongoose')

mongoose.Promise = global.Promise
before((done) => {
    mongoose
        .connection
        .collections
        .local_users
        .drop(() => {
            done()
        })
})