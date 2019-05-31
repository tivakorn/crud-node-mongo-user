const express = require('express')
const app = express()
const port = 3000

//
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//

const userRouter = require('./routes/usersRoure')

app.use('/users',[], userRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))