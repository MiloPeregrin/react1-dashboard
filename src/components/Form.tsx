import { useRef, useState } from "react";
import { TaskItemType } from "../common/types";
import { useTaskContext } from "../hooks/useTaskContext";
import Button from "./Button";
import Card from "./Card";

interface IForm {
  mode: "new" | "edit";
  selectedTask: TaskItemType;
}

const Form = ({ mode, selectedTask }: IForm) => {
  const editMode = mode === "edit";
  const { tasks, addTask } = useTaskContext();
  const [disabled, setDisabled] = useState<boolean>(editMode ? true : false);
  const taskNameRef = useRef<HTMLInputElement>(null);
  const taskDetailRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskNameRef.current && taskDetailRef.current) {
      const task: TaskItemType = {
        taskState: `${editMode ? selectedTask.taskState : "Ready"}`,
        taskName: taskNameRef.current.value,
        taskDetail: taskDetailRef.current.value,
      };
      addTask(task);
      taskNameRef.current.value = "";
      taskDetailRef.current.value = "";
    }
  };
  const handleEdit = () => {
    setDisabled((prevState) => !prevState);
  };

  const handleCancel = () => {};

  const handleSave = () => {};

  return (
    <Card>
      <form
        onSubmit={onSubmit}
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
              defaultValue={editMode ? selectedTask.taskName : ""}
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
              defaultValue={editMode ? selectedTask.taskDetail : ""}
            />
          </div>
        </div>
        {editMode &&
          (disabled ? (
            <div>
              <Button size="large" onClick={handleEdit}>
                Edit
              </Button>
            </div>
          ) : (
            <div>
              <Button size="medium" onClick={handleCancel}>
                Cancel
              </Button>
              <Button size="medium" onClick={handleSave}>
                Save changes
              </Button>
            </div>
          ))}
        {!editMode && (
          <Button type="submit" size="large">
            Add New Task
          </Button>
        )}
      </form>
    </Card>
  );
};

export default Form;
