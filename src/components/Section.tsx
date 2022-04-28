import Card from "./Card";
import TodoItem from "./TodoItem";

interface ISection {
  title: string;
}

const dummy = [
  { taskName: "task1", taskDetail: "taskDetail" },
  { taskName: "task2", taskDetail: "taskDetail2" },
];

const Section = ({ title }: ISection) => {
  return (
    <Card>
      <div className="flex flex-col w-full items-center h-2/3">
        <p className="font-bold">{title}</p>
        <ul className="flex flex-col w-full">
          {dummy.map((item) => {
            return (
              <li className="flex flex-col">
                <TodoItem>
                  <p className="flex justify-center">{item.taskName}</p>
                  <p>{item.taskDetail}</p>
                </TodoItem>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default Section;
