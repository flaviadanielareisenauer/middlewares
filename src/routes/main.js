const express = require("express");
const router = express.Router();

let controller = require("../controllers/mainController");
let adminMiddelware = require("../middlewares/adminUser");

router.get("/", controller.index);
router.get("/admin", adminMiddelware, controller.admin);


module.exports = router;