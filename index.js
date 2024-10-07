const express = require('express')
const app = express()
require('dotenv').config()


PORT = process.env.PORT

app.get('/', (req, res) =>{
    // console.log('Endpoint Hit!')
    res.status(200).send({message: "Server is Up"})
})


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})

