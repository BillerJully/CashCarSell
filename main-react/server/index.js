const express = require('express')
const PORT = 5000
const cors = require('cors')
const index = require('./routes/index')
const app = express()

const whitelist = ['http://localhost:80'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

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
