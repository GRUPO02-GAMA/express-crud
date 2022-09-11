const Agenda = require('../models/agenda.model')

exports.findAll = function (req, res) {
  Agenda.findAll(function (err, agenda) {
    if (err) res.send(err)
    res.send(agenda)
  })
}

exports.create = function (req, res) {
  const new_person = new Agenda(req.body)

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: 'Preencha todos os campos' })
  } else {
    Agenda.create(new_person, function (err, agenda) {
      if (err) res.send(err)
      res.json({
        error: false,
        message: 'Contato adicionado com sucesso!',
        data: agenda
      })
    })
  }
}

exports.findById = function (req, res) {
  Agenda.findById(req.params.id, function (err, agenda) {
    if (err) res.send(err)
    res.json(agenda)
  })
}

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: 'Preencha todos os campos' })
  } else {
    Agenda.update(
      req.params.id,
      new Agenda(req.body),
      function (err, agenda) {
        if (err) res.send(err)
        res.json({ error: false, message: 'Contato atualizado com sucesso!' })
      }
    )
  }
}

exports.delete = function (req, res) {
  Agenda.delete(req.params.id, function (err, agenda) {
    if (err) res.send(err)
    res.json({ error: false, message: 'Contato removido com sucesso!' })
  })
}
