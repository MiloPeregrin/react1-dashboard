import { TaskItemType, TaskStateType } from "../App";
import Button from "./Button";

interface ITaskItem {
  task: TaskItemType;
  taskState: TaskStateType;
  forwardTask: (task: TaskItemType) => void;
  reverseTask: (task: TaskItemType) => void;
}

const TaskItem = ({ task, taskState, forwardTask, reverseTask }: ITaskItem) => {
  return (
    <div className="flex flex-col items-center bg-white m-2 p-2 rounded-md drop-shadow-md border-solid border border-pink-300 space-y-2">
      <p className="flex justify-center font-medium lg:text-lg">
        {task.taskName}
      </p>
      <p>{task.taskDetail}</p>
      {taskState === "Ready" && (
        <Button onClick={() => forwardTask(task)}>{`>`}</Button>
      )}
      {taskState === "In Progress" && (
        <div>
          <Button onClick={() => reverseTask(task)}>{`<`}</Button>
          <Button onClick={() => forwardTask(task)}>{`>`}</Button>
        </div>
      )}
      {taskState === "Finished" && (
        <Button onClick={() => reverseTask(task)}>{`<`}</Button>
      )}
    </div>
  );
};

export default TaskItem;
