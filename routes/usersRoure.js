const express = require('express')
const router = express.Router()

const { validMemberId,validProflie,validPutUsers } = require('../middleware/validUser')
const { findUsers, findProfile,UpdateUser} = require( '../models/users')

router.get('/id/:id',[],findUsers)
router.post('/proflie', validProflie, findProfile)
router.put('/put',validPutUsers,UpdateUser)

module.exports = router