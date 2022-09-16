const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  state: {
    type: Number,
    default: 1,
  },
  paymentState: {
    type: Number,
    default: 1,
  },
  notes: [
    {
      type: String,
    },
  ],
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
  },
});

const Student = mongoose.model("Student", schema);

module.exports = Student;
