import { TaskItemType, TaskStateType } from "../common/types";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useTaskContext } from "../hooks/useTaskContext";

interface ITaskItem {
  id: string;
  task: TaskItemType;
  state: TaskStateType;
  onDetail: (task: TaskItemType) => void;
}

const TaskItem = ({ task, state, onDetail, id }: ITaskItem) => {
  const { forwardTask, reverseTask } = useTaskContext();
  return (
    <div className="flex flex-col items-center bg-white m-2 p-2 rounded-md drop-shadow-md border-solid border border-pink-300 space-y-2">
      <p className="flex justify-center font-medium lg:text-lg">
        <Link
          className="hover:text-pink-500 hover:underline focus:text-pink-500 focus:underline"
          onClick={() => onDetail(task)}
          to={`/detail/${id}`}
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
