const ObjectID = require('mongodb').ObjectID
const { validationResult } = require('express-validator/check')

const { ConnectMongo } = require('./connectDB')

const findProfile = async (req, res) => {
    // ------------------------------------
    const err = validationResult(req)
    if (!err.isEmpty()) return res.json(err.array())
    // ------------------------------------
}

const findUsers = async (req, res) => {

    let _id = new ObjectID(req.params.id)
    return await ConnectMongo(async (db) => {
        let result = await db.collection('users').findOne({ _id: _id })

        return res.json(result)
        // let r = await db.collection('users').find({_id:_id}).toArray()
        // try {
        //     let r = await db.collection('users').findOne({ _id: _id })
        //     console.log(r)
        //     return r
        // }
        // catch (err) {
        //     console.log(err)
        //     return err
        // }
    })
}

const UpdateUser = async (req, res) => {
    const err = validationResult(req)
    if (!err.isEmpty()) return res.json(err.array())


    let data = req.body


    return await ConnectMongo(async (db) => {

        const filter = {
            _id: new ObjectID(data._id)
        }

        const update = {
            $set: {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                age: data.age,
                status: data.status
            }
        }
        let result = await db.collection('users').updateOne(filter, update)
        return res.json(result)
    })
}

module.exports = {
    findProfile,
    findUsers,
    UpdateUser
}