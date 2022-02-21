const conn = require("../config/db.config");

var model = function (tutorial) {
  this.name = tutorial.name;
  this.start_date = tutorial.start_date;
  this.end_date = tutorial.end_date;
  this.creator = tutorial.creator;
  this.status = tutorial.status ? tutorial.status : false;
  this.created_at = new Date();
  this.updated_on = new Date();
};

const table = "tutorials";

model.getAllTutorials = (result) => {
  conn.query("SELECT * FROM ?? ", table, (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
  conn.end();
};

model.getTutorial = (id, result) => {
  conn.query("SELECT * FROM ?? WHERE id = ?", [table, id], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
  conn.end();
};

model.createTutorial = (data, result) => {
  conn.query("INSERT INTO ?? SET ?", [table, data], (err, result) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
  conn.end();
};

model.updateTutorial = (data, result) => {
  conn.query("UPDATE ?? SET ?", [table, data], (err, result) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
  conn.end();
};

model.deleteTutorial = (id, result) => {
  conn.query("DELETE FROM ?? WHERE id = ?", [table, id], (err, result) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
  conn.end();
};

module.exports = model;
