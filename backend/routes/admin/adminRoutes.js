const express = require("express");
const router = express.Router();

const {
	getAllUsers,
	getParticularUser,
	updateParticularUser,
	deleteParticularUser,
	createUser,
} = require("../../controllers/admin/adminController");

router.get("/getuserbyid/:id", getParticularUser);
router.put("/updateuserbyid/:id", updateParticularUser);
router.get("/getusers", getAllUsers);
router.delete("/deleteuserbyid/:id", deleteParticularUser);
router.post("/createUser", createUser);
module.exports = router;
