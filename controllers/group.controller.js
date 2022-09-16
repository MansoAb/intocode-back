const Group = require("../models/Group.model");
const Student = require("../models/Student.model");

module.exports.groupControllers = {
  addGroup: async (req, res) => {
    const { name, week, isFinish } = req.body;
    try {
      await Group.create({ name, week, isFinish });
      res.json("Группа добавлена.");
    } catch (err) {
      res.json(err.message);
    }
  },
  showGroups: async (req, res) => {
    try {
      const groups = await Group.find();
      res.json(groups);
    } catch (err) {
      res.json(err.message);
    }
  },
  showGroupsByWeek: async (req, res) => {
    try {
      const groups = await Group.find({ week: req.body.week });
      res.json(groups);
    } catch (err) {
      res.json(err.message);
    }
  },
  showGroupByFinish: async (req, res) => {
    try {
      const groups = await Group.find({ isFinish: true });
      res.json(groups);
    } catch (err) {
      res.json(err.message);
    }
  },
  procentOffer: async (req, res) => {
    const { id } = req.params;
    try {
      const groups = await Student.find({ groupId: id });
      const students = await Student.find({ state: 3 });

      const procent = students.length / (groups.length / 100) + "%";

      res.json(procent);
    } catch (err) {
      res.json(err.message);
    }
  },
};
