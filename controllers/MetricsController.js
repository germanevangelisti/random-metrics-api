var metricsData = require("../metricsData");

module.exports = {
  list: (req, res) => res.json(metricsData),
};
