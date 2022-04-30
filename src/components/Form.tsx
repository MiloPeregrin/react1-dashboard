import { useRef } from "react";
import { TaskItemType } from "../App";
import Card from "./Card";

interface IForm {
  setTasks: (prevState: any) => void;
}

const Form = ({ setTasks }: IForm) => {
  const taskNameRef = useRef<HTMLInputElement>(null);
  const taskDetailRef = useRef<HTMLInputElement>(null);

  const submitTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskNameRef.current && taskDetailRef.current) {
      const task = {
        taskState: "Ready",
        taskName: taskNameRef.current.value,
        taskDetail: taskDetailRef.current.value,
      };
      setTasks((prevState: TaskItemType[]) => {
        return [...prevState, task];
      });
      taskNameRef.current.value = "";
      taskDetailRef.current.value = "";
    }
  };

  return (
    <Card>
      <form
        onSubmit={submitTask}
        className="flex flex-col items-center w-full space-y-3"
      >
        <div className="space-y-2">
          <div>
            <label htmlFor="name">Task name: </label>
            <input
              ref={taskNameRef}
              type="text"
              id="name"
              name="name"
              className="border-2 border-rose-600 w-64"
            />
          </div>
          <div>
            <label htmlFor="detail">Task detail: </label>
            <input
              ref={taskDetailRef}
              type="text"
              id="detail"
              name="detail"
              className="border-2 border-rose-600 w-64"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-pink-600 text-white p-2 rounded-md drop-shadow-md w-64 h-10"
        >
          Add New Task
        </button>
      </form>
    </Card>
  );
};

export default Form;
