import { TaskItemType } from "../App";
import Card from "./Card";
import TaskItem from "./TaskItem";

interface ISection {
  tasks: TaskItemType[];
  taskState: "Ready" | "In Progress" | "Finished";
  forwardTask: (taskState: string, task: TaskItemType) => void;
  reverseTask: (taskState: string, task: TaskItemType) => void;
}

const Section = ({ taskState, tasks, forwardTask, reverseTask }: ISection) => {
  return (
    <Card>
      <div className="flex flex-col w-full items-center h-2/3">
        <p className="font-medium text-xl">{taskState}</p>
        <ul className="flex flex-col w-full">
          {tasks.map((item) => {
            return (
              <li key={`${item.taskName}${Math.random()}`}>
                <TaskItem
                  task={item}
                  taskState={taskState}
                  forwardTask={forwardTask}
                  reverseTask={reverseTask}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default Section;
