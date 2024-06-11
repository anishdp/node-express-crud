const model = require("../models/tutorial.model");

const getTutorials = (req, res) => {
  console.log(req);
  model.getAllTutorials((err, result) => {
    console.log(err, result);
    console.log('test')
    if (err)
      return res.status(500).json({
        status: 500,
        message: err,
      });
    res.status(200).json({
      status: 200,
      message: "Success",
      data: result,
    });
  });
};

const getTutorial = (req, res) => {
  model.getTutorial(req.params.id, (err, result) => {
    if (err)
      return res.status(500).json({
        status: 500,
        message: err,
      });
    res.status(200).json({
      status: 200,
      message: "Success",
      data: result,
    });
  });
};

const createTutorial = (req, res) => {
  const modelData = new model(req.body);
  model.createTutorial(modelData, (err, result) => {
    if (err)
      return res.status(500).json({
        status: 500,
        message: err,
      });
    res.status(201).json({
      status: 201,
      message: "Success",
      data: result,
    });
  });
};
const updateTutorial = (req, res) => {
  const modelData = new model(req.body);
  delete modelData.created_at;
  model.updateTutorial(req.params.id, modelData, (err, result) => {
    if (err)
      return res.status(500).json({
        status: 500,
        message: err,
      });
    res.status(200).json({
      status: 200,
      message: "Success",
    });
  });
};
const deleteTutorial = (req, res) => {
  model.deleteTutorial(req.params.id, (err, result) => {
    if (err)
      return res.status(500).json({
        status: 500,
        message: err,
      });
    res.status(200).json({
      status: 200,
      message: "Success",
    });
  });
};

module.exports = {
  getTutorials,
  getTutorial,
  createTutorial,
  updateTutorial,
  deleteTutorial,
};
