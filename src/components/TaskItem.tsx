import { TaskItemType, TaskStateType } from "../common/types";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useTaskContext } from "../hooks/useTaskContext";

interface ITaskItem {
  task: TaskItemType;
  state: TaskStateType;
}

const TaskItem = ({ task, state }: ITaskItem) => {
  const { forwardTask, reverseTask, setFormData } = useTaskContext();
  return (
    <div className="flex flex-col items-center bg-white m-2 p-2 rounded-md drop-shadow-md border-solid border border-pink-300 space-y-2">
      <p className="flex justify-center font-medium lg:text-lg">
        <Link
          className="hover:text-pink-500 hover:underline focus:text-pink-500 focus:underline"
          onClick={() => setFormData(task)}
          to={`/detail/${task.id}`}
        >
          {task.name}
        </Link>
      </p>
      <p>{task.detail}</p>
      {state === "Ready" && (
        <Button onClick={() => forwardTask(task)}>{`>`}</Button>
      )}
      {state === "In Progress" && (
        <div>
          <Button onClick={() => reverseTask(task)}>{`<`}</Button>
          <Button onClick={() => forwardTask(task)}>{`>`}</Button>
        </div>
      )}
      {state === "Finished" && (
        <Button onClick={() => reverseTask(task)}>{`<`}</Button>
      )}
    </div>
  );
};

export default TaskItem;
