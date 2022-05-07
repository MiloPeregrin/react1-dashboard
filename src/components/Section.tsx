import { TaskItemType, TaskStateType } from "../common/types";
import { generateUUID } from "../common/utility";
import Card from "./Card";
import TaskItem from "./TaskItem";

interface ISection {
  title: TaskStateType;
  tasks: TaskItemType[];
  onDetail: () => void;
}

const Section = ({ title, tasks, onDetail }: ISection) => {
  return (
    <Card>
      <p className="font-medium text-xl">{title}</p>
      <ul className="flex flex-col w-full h-full">
        {tasks.map((task) => {
          return (
            <li key={generateUUID()}>
              <TaskItem task={task} taskState={title} onDetail={onDetail} />
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Section;
