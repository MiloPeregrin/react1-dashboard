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
  const [inputState, setInputState] = useState<TaskItemType>(selectedTask);

  const [name, setName] = useState<string>(editMode ? selectedTask.name : "");
  const [detail, setDetail] = useState<string>(
    editMode ? selectedTask.detail : ""
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedTask: TaskItemType = {
      state: `${editMode ? selectedTask.state : "Ready"}`,
      name: name,
      detail: detail,
    };
    addTask(updatedTask);
    if (editMode) {
      setDisabled((prevState) => !prevState);
    } else {
      setName("");
      setDetail("");
    }

    // setInputState({
    //   state: "Finished",
    //   name: "",
    //   detail: "",
    // });
  };

  const handleEdit = () => {
    setDisabled((prevState) => !prevState);
  };

  const handleCancel = () => {
    setName(selectedTask.name);
    setDetail(selectedTask.detail);
    setDisabled((prevState) => !prevState);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("etarget", e.target.value);
  //   setInputState((prevState) => ({
  //     ...prevState,
  //     name: e.target.value,
  //   }));
  // };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetail(e.target.value);
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
              // defaultValue={editMode ? selectedTask.name : ""}
              value={name}
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
              // defaultValue={editMode ? selectedTask.detail : ""}
              value={detail}
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
