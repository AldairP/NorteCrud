const axios = require("axios");

exports.homeRoutes = (req, res) => {
  //Make a get request to /api/users
  axios
    .get("http://localhost:3000/api/projects")
    .then(function (response) {
      res.render("index", { projects: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_project = (req, res) => {
  res.render("add_project");
};

exports.update_project = (req, res) => {
  axios
    .get("http://localhost:3000/api/projects", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_project", { project: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
