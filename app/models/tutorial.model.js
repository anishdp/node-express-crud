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
      console.log(err);
      result(null, err);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

model.getTutorial = (id, result) => {
  conn.query("SELECT * FROM ?? WHERE id = ?", [table, id], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

model.createTutorial = (data, result) => {
  conn.query("INSERT INTO ?? SET ?", [table, data], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      let returnData = { id: res.insertId };
      result(null, returnData);
    }
  });
};

model.updateTutorial = (id, data, result) => {
  conn.query("UPDATE ?? SET ? WHERE id=?", [table, data, id], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

model.deleteTutorial = (id, result) => {
  conn.query("DELETE FROM ?? WHERE id=?", [table, id], (err, res) => {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = model;
