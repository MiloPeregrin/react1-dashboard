import { useEffect, useId, useState } from "react";
import { NewTaskType, TaskItemType } from "../common/types";
import { useTaskContext } from "../hooks/useTaskContext";
import Alert from "./Alert";
import Button from "./Button";
import Card from "./Card";
import { newTaskObject } from "../common/utility";

interface IForm {
  mode: "new" | "edit";
  initialFormData: TaskItemType | NewTaskType;
}

const Form = ({ mode, initialFormData }: IForm) => {
  const { addTask, updateTasks } = useTaskContext();
  const [formValues, setFormValues] = useState<TaskItemType>(initialFormData);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(
    mode === "edit" ? true : false
  );
  const formId = useId();

  useEffect(() => {
    setFormValues(initialFormData);
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
    if (mode === "edit") {
      updateTasks(initialFormData, formValues);
      setDisabled(true);
    } else {
      addTask(formValues);
      setFormValues(newTaskObject);
    }
    handleShowAlert();
  };

  const handleCancel = () => {
    setFormValues(initialFormData);
    setDisabled(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
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
                id={formId + "name"}
                name="name"
                className="border-2 border-rose-600 w-64"
                disabled={disabled}
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="detail">Task detail: </label>
              <input
                type="text"
                id={formId + "detail"}
                name="detail"
                className="border-2 border-rose-600 w-64"
                disabled={disabled}
                value={formValues.detail}
                onChange={handleChange}
              />
            </div>
          </div>
          {mode === "edit" &&
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
          {mode === "new" && (
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
