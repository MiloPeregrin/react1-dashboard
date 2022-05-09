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

  const [name, setName] = useState<string>(
    editMode ? selectedTask.taskName : ""
  );
  const [detail, setDetail] = useState<string>(
    editMode ? selectedTask.taskDetail : ""
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedTask: TaskItemType = {
      taskState: `${editMode ? selectedTask.taskState : "Ready"}`,
      taskName: name,
      taskDetail: detail,
    };
    addTask(updatedTask);
    if (editMode) {
      setDisabled((prevState) => !prevState);
    } else {
      setName("");
      setDetail("");
    }

    // setInputState({
    //   taskState: "Finished",
    //   taskName: "",
    //   taskDetail: "",
    // });
  };

  const handleEdit = () => {
    setDisabled((prevState) => !prevState);
  };

  const handleCancel = () => {
    setName(selectedTask.taskName);
    setDetail(selectedTask.taskDetail);
    setDisabled((prevState) => !prevState);
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("etarget", e.target.value);
  //   setInputState((prevState) => ({
  //     ...prevState,
  //     taskName: e.target.value,
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
              // defaultValue={editMode ? selectedTask.taskName : ""}
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
              // defaultValue={editMode ? selectedTask.taskDetail : ""}
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
