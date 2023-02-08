const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
const port = 5000


app.use(cors())
app.use(express.json())

//Available Routes in routes folder
app.use('/api/info', require('./routes/info'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
