import { useEffect, useState } from "react";
import { TaskItemType } from "../common/types";
import { useTaskContext } from "../hooks/useTaskContext";
import Alert from "../components/Alert";
import Button from "../components/Button";
import Card from "../components/Card";
import { generateUUID } from "../common/utility";
import { useParams } from "react-router-dom";

interface IForm {
  mode: "new" | "edit";
  selectedTask: TaskItemType;
}

const Form = ({ mode, selectedTask }: IForm) => {
  const editMode = mode === "edit";
  const params = useParams();
  const { addTask, updateTask, tasks } = useTaskContext();
  const [disabled, setDisabled] = useState<boolean>(editMode ? true : false);
  const [inputState, setInputState] = useState<TaskItemType>(
    editMode
      ? selectedTask
      : { id: generateUUID(), state: "Ready", name: "", detail: "" }
  );
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    const initialTask = tasks.find((item) => item.id === params.id);

    if (initialTask) {
      setInputState(initialTask);
    }
  }, [params, tasks]);

  const handleDisabled = () => {
    setDisabled(false);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editMode) {
      updateTask(selectedTask, inputState);
      setDisabled(true);
    } else {
      addTask(inputState);
    }
    handleShowAlert();
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
    <div className="flex flex-col items-center w-full">
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
      {showAlert && <Alert action={mode} />}
    </div>
  );
};

export default Form;
