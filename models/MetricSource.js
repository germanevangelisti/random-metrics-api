const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MetricSource = new Schema(
  {
    Name: String,
    CPU: String,
    FS_Usage: String,
    Memory: String,
  },
  {
    collection: "metricSources",
  }
);

module.exports = mongoose.model("MetricSource", MetricSource);
