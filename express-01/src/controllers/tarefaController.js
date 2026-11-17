import { tarefaService } from "../services/index.js";
import { AppError } from "../utils/index.js";

const getTarefas = async (req, res) => {
  const tarefas = await tarefaService.listarTarefas();
  return res.status(200).send(tarefas);
};

const getTarefa = async (req, res) => {
  const tarefa = await tarefaService.buscarTarefaPorId(req.params.objectId);
  if (!tarefa) {
    throw new AppError("Tarefa não encontrada.", 404);
  }
  return res.status(200).send(tarefa);
};

const createTarefa = async (req, res) => {
  const { descricao, concluida } = req.body || {};
  const tarefa = await tarefaService.criarTarefa({
    descricao,
    concluida
  });

  return res.status(201).send(tarefa);
};

const updateTarefa = async (req, res) => {
  const { descricao, concluida } = req.body || {};
  const tarefa = await tarefaService.atualizarTarefa(req.params.objectId, {
    descricao,
    concluida
  });

  if (!tarefa) {
    throw new AppError("Tarefa não encontrada.", 404);
  }
  return res.status(200).send(tarefa);
};

const deleteTarefa = async (req, res) => {
  const removida = await tarefaService.removeTarefa(req.params.objectId);
  if (!removida) {
    throw new AppError("Tarefa não encontrada.", 404);
  }
  return res.status(204).send({ message: "Tarefa removida com sucesso."} );
};

export default {
  getTarefas,
  getTarefa,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};