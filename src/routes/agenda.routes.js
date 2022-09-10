const express = require('express')
const router = express.Router()

const agendaController = require('../controllers/agenda.controller');

router.get('/', agendaController.findAll);
router.post('/', agendaController.create);
router.get('/:id', agendaController.findById);
router.put('/:id', agendaController.update);
router.delete('/:id', agendaController.delete);

module.exports = router