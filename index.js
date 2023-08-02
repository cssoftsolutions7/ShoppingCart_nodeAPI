const express = require('express')
const cors = require('cors')

const app = express()

var corsOptions = {
    origin: 'https://localhost:8080'
}

//Middleware

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

//Just Testing

app.get('/' , (req, res) => {
    res.json({ message: 'Welcome Your API is Working Fine !'})
})

//Port
const PORT = process.env.PORT || 8081

//Server

app.listen(PORT, () => {
    console.log(`Server is Running at Port : ${PORT}`)
})