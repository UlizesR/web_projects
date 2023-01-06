const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://db-admin:${process.env.DB_PASSWORD}>@hermeschat-db.5qlqi0m.mongodb.net/?retryWrites=true&w=majority`, () => {
    console.log('connected to mongodb')
})
