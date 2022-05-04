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
      <p className="font-medium text-xl">{title}</p>
      <ul className="flex flex-col w-full h-full">
        {tasks.map((task) => {
          return (
            <li key={tasks.indexOf(task)}>
              <TaskItem
                task={task}
                taskState={title}
                forwardTask={forwardTask}
                reverseTask={reverseTask}
              />
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Section;
