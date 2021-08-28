const router = require('express').Router()
module.exports = router
const { models: { Entry } } = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const entries = await Entry.findAll(/*{
      //attributes: ['id', 'name', 'price', 'inventory'],
      //include: [Country]
    }*/)
    res.json(entries)
  } catch (err) {
    next(err)
  }
})

//Shanntal change
router.get('/entries/:id', async (req, res, next) => {
  try {
    const entry = await Entry.findByPk(req.params.id)
    res.send(entry)
  } catch (err) {
    next(err)
  }
})

router.post('/entries', async (req, res, next) => {
  try {
    const entry = await Entry.update(req.body, { where: { id: req.body.id } });
    res.send(entry);
  } catch (err) {
    next(err);
  }
})

router.put('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const entry = await Entry.update(req.body, { where: { id: id }});
    res.sendStatus(201);
  }
  catch (err){
    next(err);
  }

})