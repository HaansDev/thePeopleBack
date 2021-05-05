const mongoose = require("mongoose")

const password = "xNEJPVtG62zQHDaTSB4ha6VVxqtHKk"
const dbname = "multimedia"
const user = "haansadmin"
const host = "cluster0.qld7b.mongodb.net"

const uri = `mongodb+srv://${user}:${password}@${host}/${dbname}?retryWrites=true&w=majority`

module.exports = mongoose.connect(uri,
    {
        useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true
    })
