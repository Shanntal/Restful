const { route } = require('./users')

const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/resources', require('./resources'))
router.use('/entries', require('./entries'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
