require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.set("PORT", process.env.PORT || 5000);

const env = process.env.NODE_ENV;
const config = require("./db");

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const MetricSourceRoute = require("./routes/MetricSourceRoute");
const MetricsRoute = require("./routes/MetricsRoute");
const AlertRoute = require("./routes/AlertRoute");

app.use("/metricSource", MetricSourceRoute);
app.use("/metrics", MetricsRoute);
app.use("/alert", AlertRoute);

app.listen(app.get("PORT"), () => {
  console.log(`API running at: localhost:${app.get("PORT")}`);
  console.log(`NODE_ENV: ${env}`);
});
