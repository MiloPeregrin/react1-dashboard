import { TaskItemType, TaskStateType } from "../common/types";
import Card from "./Card";
import TaskItem from "./TaskItem";

interface ISection {
  title: TaskStateType;
  tasks: TaskItemType[];
}

const Section = ({ title, tasks }: ISection) => {
  return (
    <Card>
      <p className="font-medium text-xl">{title}</p>
      <ul className="flex flex-col w-full h-full">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <TaskItem task={task} state={title} />
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Section;
