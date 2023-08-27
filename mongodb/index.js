const { model, Schema } = require("mongoose");

const RecordSchema = new Schema({
  artist: String,
  title: String,
  catalogueNumber: String,
  year: String,
});

module.exports = model("Record", RecordSchema);
