import TaskModel from "../../models/task.model.js";

export default async function getTaskById(req, res) {
  const { uid } = req.query;
  const { id } = req.params;

  if (!uid || !id) {
    res.status(404).send({ error: "Give all arguments" });
    return;
  }
  try {
    const findTask = await TaskModel.findById(id).lean();

    if (findTask?.authorUID !== uid) {
      res.status(404).send({ error: "Unauthorized user" });
      return;
    }

    if (!findTask?._id) {
      res.send({ error: "No task found" }, 404);
      return;
    }
    res.send(findTask);
  } catch (err) {
    res.send({ error: "Somethign went wrong" }, 500);
  }
}
