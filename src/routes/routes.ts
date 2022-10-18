import { Router } from 'express';
import { deleteTodo, getTodo, postTodo, putTodo } from "../controllers/todos";
import express from 'express';

const router = Router();

router.use(express.json())

router.get("/todos", getTodo)
router.post("/todos", postTodo)
router.put("/todos", putTodo)
router.delete("/todos", deleteTodo)

export { router };