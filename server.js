const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

app.use(cors())
app.use(express.json())

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'Cluster0',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('Cluster0')

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterName', (request, response) => {
    const charName = request.params.characterName.toUpperCase()

    collection.find({name: charName}).toArray()
    .then(results => {
        console.log(results)
        response.json(results[0])
    })
    .catch(error => console.error(error))
})
})

.catch(error => console.error)

app.listen(process.env.PORT || PORT, () => {
    console.log("Server is Running")
})