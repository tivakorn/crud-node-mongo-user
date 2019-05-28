const express = require('express')
const app = express()
const port = 3001

const db = require('./db')

app.get('/test/:id', (req, res) => {
    const id = req.params.id
    res.json({ id: id })
})

app.get('/user/:id', async (req, res) => {
    let id = req.params.id

    try {
        let result = await db.get_data(id)
        res.json({ data: result })
    }
    catch (err) {
        res.json({ error: err.message })
    }
})

app.get('/user', async (req, res) => {
    try {
        let result = await db.get_data_many()
        res.json({ data: result })
    }
    catch (err) {
        res.json({ error: err.message })
    }
})

app.put('/user/:id', async (req, res) => {
    let id = req.params.id
    try {
        let result = await db.put_data(id)
        res.json({ data: result })
    }
    catch (err) {
        res.json({ error: err.message })
    }
})

app.post('/user', async (req, res) => {
    try {
        let result = await db.post_data()
        res.json({ data: result })
    }
    catch (err) {
        res.json({ error: err.message })
    }
})

app.delete('/user/:id',async (req,res)=>{
    let id = req.params.id
    try {
        let result = await db.delete_data(id)
        res.json({ data: result })
    }
    catch (err) {
        res.json({ error: err.message })
    }
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))