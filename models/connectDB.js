const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectID = require('mongodb').ObjectID

const port_mongo = 27017
const db_mongo = 'shopper'
const host_mongo = 'localhost'

const url = `mongodb://${host_mongo}:${port_mongo}/${db_mongo}`

const ConnectMongo = async (callback) => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true })
    return await callback(client.db(db_mongo))
}

module.exports = { ConnectMongo }