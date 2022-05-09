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
  // const [inputState, setInputState] = useState<TaskItemType>(selectedTask);

  const [name, setName] = useState<string>(selectedTask.taskName);
  const [detail, setDetail] = useState<string>(selectedTask.taskDetail);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTask: TaskItemType = {
      taskState: `${editMode ? selectedTask.taskState : "Ready"}`,
      taskName: name,
      taskDetail: detail,
    };
    addTask(updatedTask);

    // setInputState({
    //   taskState: "Finished",
    //   taskName: "",
    //   taskDetail: "",
    // });
  };

  const handleEdit = () => {
    setDisabled((prevState) => !prevState);
  };

  const handleCancel = () => {};

  const handleSave = () => {};

  // const handleNameChange = (e: any) => {
  //   console.log("etarget", e.target.value);
  //   setInputState((prevState) => ({
  //     ...prevState,
  //     taskName: e.target.value,
  //   }));
  // };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log("setName", e.target.value);
  };
  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetail(e.target.value);
    console.log("setDetail", e.target.value);
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
              // defaultValue={editMode ? selectedTask.taskName : ""}
              value={editMode ? name : ""}
              onChange={handleNameChange}
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
              // defaultValue={editMode ? selectedTask.taskDetail : ""}
              value={editMode ? detail : ""}
              onChange={handleDetailChange}
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
              <Button type="submit" size="medium" onClick={handleSave}>
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
