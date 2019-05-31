const { check, query } = require('express-validator/check')



const validMemberId = (req, res, next) => {
    const _id = req.query.id

    if (_id === undefined) {
        return res.json({ msg: 'No id' })
    }
    next()
}
const validProflie = [
    check('id').exists().withMessage("No Message ID")
]

const validPutUsers = [
    check('_id').exists().withMessage("ไม่มี _id")
]


module.exports = {
    validMemberId,
    validProflie,
    validPutUsers
}