const router = require('express').Router()
const penjualanikanController = require('../controller/penjualanikan')

router.post('/insert', (req, res)=> {
    penjualanikanController.create(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/getall', (req, res)=> {
    penjualanikanController.showAllData()
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/getbyid/:id', (req, res)=> {
   penjualanikanController.showDataById(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.put('/update/:id', (req, res)=> {
   penjualanikanController.update(req.params.id, req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.delete('/delete/:id', (req, res)=> {
    penjualanikanController.delete(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  module.exports = router
