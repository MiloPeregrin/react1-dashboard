import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { TaskItemType } from "../common/types";
import { generateUUID } from "../common/utility";
import { useTaskContext } from "../hooks/useTaskContext";
import Alert from "./Alert";
import Button from "./Button";
import Card from "./Card";

interface IForm {
  mode: "new" | "edit";
  initialFormData: TaskItemType;
}

type FormData = {
  name: string;
  detail: string;
};

const Form = ({ mode, initialFormData }: IForm) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
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
    const updatedValues = Object.fromEntries(
      Object.entries(formData).filter(([_, v]) => v != undefined)
    );
    if (mode === "edit") {
      updateTasks(initialFormData, { ...initialFormData, ...updatedValues });
      setDisabled(true);
    } else {
      addTask({
        id: generateUUID(),
        state: "Ready",
        ...formData,
      });
      reset({
        name: "",
        detail: "",
      });
    }
    handleShowAlert();
  };

  const handleCancel = () => {
    setValue("name", initialFormData.name);
    setValue("detail", initialFormData.detail);
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
                // name="name"
                // ref={register}
                //FIXME workaround, napojeni inputu pres ref={register} haze type error
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
                // name="name"
                // ref={register}
                //FIXME workaround, napojeni inputu pres ref={register} haze type error
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
