const { Router } = require("express");
const router = Router();
const { studentControllers } = require("../controllers//student.controllers");

router.post("/students", studentControllers.addStudent);
router.patch("/students/:id", studentControllers.addNote);
router.patch("/students/:id/payment", studentControllers.changePaymentState);
router.patch("/students/:id/state", studentControllers.changeState);
router.get("/students", studentControllers.showStudentByPaymentState);
router.get("/students/state", studentControllers.showStudentByState);
router.get("/students/:id/notes", studentControllers.showStudentNotes);
router.get(
  "/students/group/:groupId",
  studentControllers.showStudentsFromGroup
);

module.exports = router;
