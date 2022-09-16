const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  week: { type: Number, default: 1 },
  isFinish: { type: Boolean, default: false },
});

const Group = mongoose.model("Group", schema);

module.exports = Group;
