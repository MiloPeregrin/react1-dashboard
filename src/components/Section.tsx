import { TaskItemType, TaskStateType } from "../common/types";
import Card from "./Card";
import TaskItem from "./TaskItem";

interface ISection {
  title: TaskStateType;
  tasks: TaskItemType[];
  forwardTask: (task: TaskItemType) => void;
  reverseTask: (task: TaskItemType) => void;
}

const Section = ({ title, tasks, forwardTask, reverseTask }: ISection) => {
  return (
    <Card>
      <div className="flex flex-col w-full items-center h-full">
        <p className="font-medium text-xl">{title}</p>
        <ul className="flex flex-col w-full h-full">
          {tasks.map((item) => {
            return (
              <li key={`${item.taskName}${Math.random()}`}>
                <TaskItem
                  task={item}
                  taskState={title}
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
