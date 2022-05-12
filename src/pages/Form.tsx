import { useEffect, useState } from "react";
import { TaskItemType } from "../common/types";
import { useTaskContext } from "../hooks/useTaskContext";
import { useParams } from "react-router-dom";
import Alert from "../components/Alert";
import Button from "../components/Button";
import Card from "../components/Card";

interface IForm {
  mode: "new" | "edit";
  selectedTask: TaskItemType;
}

const Form = ({ mode, selectedTask }: IForm) => {
  const { addTask, updateTasks, tasks } = useTaskContext();
  const params = useParams();
  const editMode = mode === "edit";
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(editMode ? true : false);
  const initialTask = tasks.find((item) => item.id === params.id);
  const idCheckedTask =
    selectedTask.id === params.id ? selectedTask : initialTask!;

  const getInitialFormValues = () => {
    if (editMode) {
      return idCheckedTask;
    } else {
      return selectedTask;
    }
  };

  const [inputState, setInputState] =
    useState<TaskItemType>(getInitialFormValues);

  useEffect(() => {
    if (editMode) {
      const initial = tasks.find((item) => item.id === initialTask!.id);
      if (initial) {
        setInputState(initial);
      }
    } else {
      setInputState(selectedTask);
    }
  }, []);

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
      updateTasks(idCheckedTask, inputState);
      setDisabled(true);
    } else {
      addTask(inputState);
    }
    handleShowAlert();
  };

  const handleCancel = () => {
    setInputState(idCheckedTask);
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
