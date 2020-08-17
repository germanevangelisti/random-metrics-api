var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var alertSchema = new Schema(
  {
    name: String,
    metricSource: String,
    metricUnit: String,
    conditional: String,
    value: String,
    state: Boolean,
  },
  {
    collection: "alerts",
  }
);

var Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;
