import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { TaskItemType, FormData } from "../common/types";
import { generateUUID } from "../common/utility";
import { useTaskContext } from "../hooks/useTaskContext";
import Alert from "./Alert";
import Button from "./Button";
import Card from "./Card";

interface IForm {
  mode: "new" | "edit";
  initialFormData: TaskItemType;
}

const Form = ({ mode, initialFormData }: IForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: `${initialFormData.name}`,
      detail: `${initialFormData.detail}`,
    },
  });
  const { addTask, updateTasks } = useTaskContext();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(
    mode === "edit" ? true : false
  );
  const formId = useId();

  const handleDisabled = () => {
    setDisabled(false);
  };

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const onSubmit = (formData: FormData) => {
    if (mode === "edit") {
      updateTasks(initialFormData, formData);
      setDisabled(true);
    } else {
      addTask({
        id: generateUUID(),
        state: "Ready",
        ...formData,
      });
      reset();
    }
    handleShowAlert();
  };

  const handleCancel = () => {
    reset({
      name: initialFormData.name,
      detail: initialFormData.detail,
    });
    setDisabled(true);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Card>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center space-y-3"
        >
          <div className="space-y-2">
            <div>
              <label htmlFor={formId + "name"}>Task name: </label>
              <input
                type="text"
                id={formId + "name"}
                className="border-2 border-rose-600 w-64"
                disabled={disabled}
                {...register("name", { required: true, minLength: 1 })}
              />
            </div>
            <div>
              <label htmlFor={formId + "detail"}>Task detail: </label>
              <input
                type="text"
                id={formId + "detail"}
                className="border-2 border-rose-600 w-64"
                disabled={disabled}
                {...register("detail")}
              />
            </div>
            {errors.name && (
              <span className="flex justify-center text-red-600">
                Name of task is required
              </span>
            )}
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
