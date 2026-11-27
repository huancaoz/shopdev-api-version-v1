const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/users', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok',
        metadata: [
            {
                name: 'huan',
                age: 33
            },
            {
                name: 'chat',
                age: 33
            },
            {
                name: 'dau',
                age: 5
            },
        ]
    })
})

module.exports = router;