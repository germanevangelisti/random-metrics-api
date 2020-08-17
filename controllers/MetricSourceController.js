var { generateRandomMetricValue } = require("../scripts");
var metricSourcesData = require("../metricSourcesData");

module.exports = {
  list: (req, res) => res.json(generateRandomMetricValue(metricSourcesData)),
};
