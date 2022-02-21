const model = require("../models/tutorial.model");

const getTutorials = (req, res) => {
  model.getTutorials((err, result) => {
    if (err) return res.status(500).json({ status: 500, message: err });
    res.status(200).json({ status: 200, message: "Success", data: result });
  });
};

const getTutorial = (req, res) => {
  model.getTutorial(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ status: 500, message: err });
    res.status(200).json({ status: 200, message: "Success", data: result });
  });
};

const createTutorial = (req, res) => {
  res.status(200).json({ status: 200, message: "Success" });
};
const updateTutorial = (req, res) => {
  res.status(200).json({ status: 200, message: "Success" });
};
const deleteTutorial = (req, res) => {
  res.status(200).json({ status: 200, message: "Success" });
};

module.exports = {
  getTutorials,
  getTutorial,
  createTutorial,
  updateTutorial,
  deleteTutorial,
};
