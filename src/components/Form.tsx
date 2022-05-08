import { useRef, useState } from "react";
import { TaskItemType } from "../common/types";
import { useTaskContext } from "../hooks/useTaskContext";
import Button from "./Button";
import Card from "./Card";

interface IForm {
  mode: "new" | "edit";
}

const Form = ({ mode }: IForm) => {
  const { addTask } = useTaskContext();
  const [disabled, setDisabled] = useState<boolean>(
    mode === "edit" ? true : false
  );
  const [editableValues, setEditableValues] = useState();
  const taskNameRef = useRef<HTMLInputElement>(null);
  const taskDetailRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskNameRef.current && taskDetailRef.current) {
      const task: TaskItemType = {
        taskState: "Ready",
        taskName: taskNameRef.current.value,
        taskDetail: taskDetailRef.current.value,
      };
      addTask(task);
      taskNameRef.current.value = "";
      taskDetailRef.current.value = "";
    }
  };

  const EditTaskDetail = () => {
    setDisabled((prevState) => !prevState);
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
              disabled={disabled}
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
              disabled={disabled}
            />
          </div>
        </div>
        {mode === "edit" &&
          (disabled ? (
            <div>
              <Button onClick={EditTaskDetail}>Edit</Button>
            </div>
          ) : (
            <div>
              <Button onClick={EditTaskDetail}>Cancel</Button>
              <Button onClick={EditTaskDetail}>Confirm</Button>
            </div>
          ))}
        {mode === "new" && (
          <Button type="submit" size="large">
            Add New Task
          </Button>
        )}
      </form>
    </Card>
  );
};

export default Form;
