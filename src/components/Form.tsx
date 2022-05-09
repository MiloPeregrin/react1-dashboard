import { useState } from "react";
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
  const [inputState, setInputState] = useState<TaskItemType>(
    editMode ? selectedTask : { state: "Ready", name: "", detail: "" }
  );

  const handleDisabled = () => {
    setDisabled(false);
  };
  console.log("disabled", disabled);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editMode) {
      // FIXME pouzit editTask fci
      addTask(inputState);
      setDisabled(true);
    } else {
      addTask(inputState);
      setInputState((prevState) => ({
        ...prevState,
        name: "",
        detail: "",
      }));
    }
  };

  const handleCancel = () => {
    setInputState(selectedTask);
    setDisabled(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
              type="text"
              id="name"
              name="name"
              className="border-2 border-rose-600 w-64"
              disabled={disabled}
              value={inputState.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="detail">Task detail: </label>
            <input
              type="text"
              id="detail"
              name="detail"
              className="border-2 border-rose-600 w-64"
              disabled={disabled}
              value={inputState.detail}
              onChange={handleChange}
            />
          </div>
        </div>
        {editMode &&
          (disabled ? (
            <div>
              <Button size="large" onClick={handleDisabled}>
                Edit
              </Button>
            </div>
          ) : (
            <div>
              <Button size="medium" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" size="medium">
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
