const { Router } = require("express");
const router = Router();
const { groupControllers } = require("../controllers/group.controller");

router.get("/groups/:id/offer", groupControllers.procentOffer);
router.post("/groups", groupControllers.addGroup);
router.get("/groups/finish", groupControllers.showGroupByFinish);
router.get("/groups", groupControllers.showGroups);
router.get("/groups/week/s", groupControllers.showGroupsByWeek);

module.exports = router;
