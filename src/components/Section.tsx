import Card from "./Card";

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
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <ul>
          {dummy.map((item) => {
            return (
              <li className="flex flex-col">
                <Card>
                  <p className="flex justify-center">{item.taskName}</p>
                  <p>{item.taskDetail}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
};

export default Section;
