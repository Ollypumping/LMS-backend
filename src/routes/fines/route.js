import { Router } from "express";
import { PERMISSIONS } from "../../constants/roles.js";
import { authorize } from "../../middleware/auth.js";

const router = Router();

// Manage Fines (Admin only)
router.post("/", authorize(PERMISSIONS.MANAGE_FINES), (req, res) => {
  res.json({ message: "Create fine - Admin only" });
});

router.put("/:id", authorize(PERMISSIONS.MANAGE_FINES), (req, res) => {
  res.json({ message: "Update fine - Admin only" });
});

router.delete("/:id", authorize(PERMISSIONS.MANAGE_FINES), (req, res) => {
  res.json({ message: "Delete fine - Admin only" });
});

// View All Fines (Admin only)
router.get("/all", authorize(PERMISSIONS.MANAGE_FINES), (req, res) => {
  res.json({ message: "View all fines - Admin only" });
});

// View My Fines (Students can view their own)
router.get("/my-fines", authorize(PERMISSIONS.VIEW_FINES), (req, res) => {
  res.json({ message: "View my fines - Admin/Students" });
});

// Pay Fine (Students)
router.post("/:id/pay", authorize(PERMISSIONS.VIEW_FINES), (req, res) => {
  res.json({ message: "Pay fine - Admin/Students" });
});

export default router;