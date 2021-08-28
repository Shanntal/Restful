const router = require('express').Router()
module.exports = router
const { models: { Resource } } = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const users = await Resource.findAll(/*{
      //attributes: ['id', 'name', 'price', 'inventory'],
      //include: [Country]
    }*/)
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//Shanntal change
router.get('/resources/:id', async (req, res, next) => {
  try {
    const quote = await Resource.findByPk(req.params.id)
    res.send(quote)
  } catch (err) {
    next(err)
  }
})

router.get('/resources/p/:id', async (req, res, next) => {
  try {
    const quote = await Resource.findByPk(req.params.id)
    res.send(quote)
  } catch (err) {
    next(err)
  }
})

router.post('/:id', async (req, res, next) => {
  try {
    const resource = await Resource.update(req.body, { where: { id: req.body.id } });
    res.send(resource);
  } catch (err) {
    next(err);
  }
})

router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const resource = await Resource.update(req.body, { where: { id: id }});
    res.sendStatus(201);
  }
  catch (err){
    next(err);
  }

})