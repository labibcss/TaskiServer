import TaskModel from "../../models/task.model.js";

export const createNewTask = async (req, res) => {
  const { title, category, description, uid } = req.body;

  if (!title || !category || !uid) {
    return res.send({ error: "Give all arguments" }, 400);
  }

  try {
    const newTask = TaskModel({
      title,
      category,
      description,
      authorUID: uid,
    });
    const task = await newTask.save();
    return res.send({ ...task }, 200);
  } catch (err) {
    return res.send({ error: "Something went wrong" }, 500);
  }
};
