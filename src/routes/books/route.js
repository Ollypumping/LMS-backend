import { Router } from "express";
import { PERMISSIONS } from "../../constants/roles.js";
import { authorize } from "../../middleware/auth.js";

const router = Router();

// Book Management Routes
router.post("/", authorize(PERMISSIONS.MANAGE_BOOKS), (req, res) => {
  res.json({ message: "Add book - Admin only" });
});

router.put("/:id", authorize(PERMISSIONS.MANAGE_BOOKS), (req, res) => {
  res.json({ message: "Update book - Admin only" });
});

router.delete("/:id", authorize(PERMISSIONS.MANAGE_BOOKS), (req, res) => {
  res.json({ message: "Delete book - Admin only" });
});

router.get("/", authorize(PERMISSIONS.VIEW_BOOKS), (req, res) => {
  res.json({ message: "View books - Everyone" });
});

router.get("/:id", authorize(PERMISSIONS.VIEW_BOOKS), (req, res) => {
  res.json({ message: "View book details - Everyone" });
});

export default router;