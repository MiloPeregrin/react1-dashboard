import { useRef } from "react";
import { TaskStateType } from "../common/types";
import { useTaskContext } from "../hooks/useTaskContext";
import Card from "./Card";

const Form = () => {
  const { addTask } = useTaskContext();
  const taskNameRef = useRef<HTMLInputElement>(null);
  const taskDetailRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskNameRef.current && taskDetailRef.current) {
      const task = {
        taskState: "Ready" as TaskStateType,
        taskName: taskNameRef.current.value,
        taskDetail: taskDetailRef.current.value,
      };
      addTask(task);
      taskNameRef.current.value = "";
      taskDetailRef.current.value = "";
    }
  };

  return (
    <Card>
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center space-y-3"
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
