const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectID = require('mongodb').ObjectID

const port_mongo = 27017
const db_mongo = 'shopper'
const host_mongo = 'localhost'

const url = `mongodb://${host_mongo}:${port_mongo}/${db_mongo}`

const connect_mongo = async (callback) => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
    return await callback(client.db(db_mongo))
}

const get_data = async (id) => {
    let _id = new ObjectID(id)
    return await connect_mongo(async (db) => {
        let result = await db.collection('users').findOne({ _id: _id })
        return result
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

const get_data_many = async () => {
    return await connect_mongo(async (db) => {
        return await db.collection('users').find({}).toArray()
    })
}

const put_data = async (data) => {
    return await connect_mongo(async (db) => {
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

        console.log(update)
        return await db.collection('users').updateOne(filter, update)
    })
}

const post_data = async (data) => {
    return await connect_mongo(async (db) => {
        // console.log(data.test)
        // console.log(data.firstname)
        // let firstname = data.firstname

        let {
            firstname,
            lastname,
            email,
            age,
            status
        } = data

        let add = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            age: age,
            status: status
        }

        let r = await db.collection('users').insertOne(add)
        return r
    })
}

const delete_data = async (id) => {
    let _id = new ObjectID(id)
    return await connect_mongo(async (db) => {
        let r = await db.collection('users').deleteOne({ _id: _id })
        return r
    })
}

const find_pleum = async (req, res) => {
    // let _id = new Object
    // Business Logic
}

module.exports = {
    get_data,
    put_data,
    post_data,
    delete_data,
    get_data_many,
    find_pleum
}
