const { Router } = require('express')
const router = Router()

const monAnController = require('../controllers/MonAnController')

router.get('/', monAnController.get)
router.get('/:id', monAnController.getById)
router.post('/searchByName', monAnController.searchByName)


module.exports = router