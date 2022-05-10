import { TaskItemType } from "../common/types";
import Form from "../components/Form";

interface INewTaskForm {
  selectedTask: TaskItemType;
}

const EditTaskForm = ({ selectedTask }: INewTaskForm) => {
  return (
    <div className="flex justify-center w-full">
      <Form mode="edit" selectedTask={selectedTask} />
    </div>
  );
};

export default EditTaskForm;
