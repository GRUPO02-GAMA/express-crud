const express = require('express')
const router = express.Router()

const agendaController = require('../controllers/agenda.controller');

router.get('/agenda', agendaController.findAll);
router.post('/agenda', agendaController.create);
router.get('/agenda/:id', agendaController.findById);
router.put('/agenda/:id', agendaController.update);
router.delete('/agenda/:id', agendaController.delete);

module.exports = router