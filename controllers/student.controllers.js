const Student = require("../models/Student.model");

const Group = require("../models/Group.model");

module.exports.studentControllers = {
  addNote: async (req, res) => {
    const { id } = req.params;
    try {
      await Student.findByIdAndUpdate(id, { $push: { notes: req.body.text } });
      res.json("Заметка о студенте добавлена");
    } catch (err) {
      res.json(err.message);
    }
  },
  changeState: async (req, res) => {
    const { id } = req.params;
    try {
      await Student.findByIdAndUpdate(id, { state: req.body.state });
      res.json("Статус изменен");
    } catch (err) {
      res.json(err.message);
    }
  },
  changePaymentState: async (req, res) => {
    const { id } = req.params;
    try {
      await Student.findByIdAndUpdate(id, {
        paymentState: req.body.paymentState,
      });
      res.json("Статус оплаты изменен.");
    } catch (err) {
      res.json(err.message);
    }
  },
  addStudent: async (req, res) => {
    const { name, state, paymentState, groupId } = req.body;
    try {
      await Student.create({ name, state, paymentState, groupId });
      res.json("Студент создан");
    } catch (err) {
      res.json(err.message);
    }
  },
  showStudentNotes: async (req, res) => {
    const { id } = req.params;
    try {
      const student = await Student.findById(id);

      res.json(student.notes);
    } catch (err) {
      res.json(err.message);
    }
  },
  showStudentsFromGroup: async (req, res) => {
    const { groupId } = req.params;
    try {
      const students = await Student.find({ groupId: groupId });

      res.json(students);
    } catch (err) {
      res.json(err.message);
    }
  },
  showStudentByPaymentState: async (req, res) => {
    try {
      if (req.body.paymentState < 3 && req.body.paymentState > 0) {
        const students = await Student.find({
          paymentState: req.body.paymentState,
        });
        return res.json(students);
      }
      res.json("Нет студентов с таким статусом");
    } catch (err) {
      return res.json(err.message);
    }
  },
  showStudentByState: async (req, res) => {
    try {
      if (req.body.state < 4 && req.body.state > 0) {
        const students = await Student.find({ state: req.body.state });
        return res.json(students);
      }
      return res.json("Нет студентов с таким статусом");
    } catch (err) {
      res.json(err.message);
    }
  },
};
