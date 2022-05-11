import { TaskItemType, TaskStateType } from "../common/types";
import Card from "./Card";
import TaskItem from "./TaskItem";

interface ISection {
  title: TaskStateType;
  tasks: TaskItemType[];
  onDetail: (task: TaskItemType) => void;
}

const Section = ({ title, tasks, onDetail }: ISection) => {
  return (
    <Card>
      <p className="font-medium text-xl">{title}</p>
      <ul className="flex flex-col w-full h-full">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <TaskItem
                id={task.id}
                task={task}
                state={title}
                onDetail={onDetail}
              />
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Section;
