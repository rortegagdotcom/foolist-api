import { Router } from "express";

import * as taskCtrl from "../controllers/taskController";

const router = Router();

router.get("/tasks", taskCtrl.getTasks);
router.get("/tasks/:id", taskCtrl.getTask);
router.post("/tasks", taskCtrl.createTask);
router.delete("/tasks/:id", taskCtrl.deleteTask);
router.put("/tasks/:id", taskCtrl.updateTask);

export default router;
