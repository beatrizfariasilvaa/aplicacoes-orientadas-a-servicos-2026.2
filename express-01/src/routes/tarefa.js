import { Router } from "express";
import { tarefaController } from "../controllers/index.js";
import {
  validate,
  createTarefaSchema,
  updateTarefaSchema,
  tarefaIdParamSchema,
} from "../middlewares/index.js";

const router = Router();

router.get("/", tarefaController.getTarefas);
router.get(
  "/:objectId",
  validate(tarefaIdParamSchema),
  tarefaController.getTarefa
);
router.post("/", validate(createTarefaSchema), tarefaController.createTarefa);
router.put(
  "/:objectId",
  validate(tarefaIdParamSchema),
  validate(updateTarefaSchema),
  tarefaController.updateTarefa
);
router.delete(
  "/:objectId",
  validate(tarefaIdParamSchema),
  tarefaController.deleteTarefa
);

export default router;
