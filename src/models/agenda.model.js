var dbConn = require('./../../config/db.config')

var Agenda = function (agenda) {
  this.name = agenda.name
  this.email = agenda.email
  this.age = agenda.age
  this.gender = agenda.gender
}

Agenda.create = function (newCont, result) {
  dbConn.query('INSERT INTO agenda set ?', newCont, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      console.log(res.insertId)
      result(null, res.insertId)
    }
  })
}

Agenda.findById = function (id, result) {
  dbConn.query('Select * from agenda where id = ? ', id, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

Agenda.findAll = function (result) {
    dbConn.query("select * from agenda", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

Agenda.update = function (id, agenda, result) {
  dbConn.query(
    'UPDATE agenda SET name=?, email=?, age=?, gender=? WHERE id = ?',
    [agenda.name, agenda.email, agenda.age, agenda.gender, id],
    function (err, res) {
      if (err) {
        console.log('error: ', err)
        result(null, err)
      } else {
        result(null, res)
      }
    }
  )
}

Agenda.delete = function (id, result) {
  dbConn.query('DELETE FROM agenda WHERE id = ?', [id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Agenda
