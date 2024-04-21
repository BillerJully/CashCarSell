const express = require('express')
const PORT = 5000
const cors = require('cors')
const index = require('./routes/index')
const app = express()

const frontend_allowed = '192.168.1.226'
const whitelist = [
    `http://${frontend_allowed}:80`,
    `http://${frontend_allowed}`,
    `https://${frontend_allowed}:80`,
    `https://${frontend_allowed}`,
]

const corsOptions = {
    origin: function (origin, callback) {
        console.log(`Request from ${origin}`)
        if (origin && whitelist.indexOf(origin) !== -1) {
            console.log(`Request allowed`)
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
            console.log(`Request denied`)
        }
    },
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/', index)

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server online on ${PORT} port`)
        })
    } catch (err) {
        console.log(err)
    }
}

start()
