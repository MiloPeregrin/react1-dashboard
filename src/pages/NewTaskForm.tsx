import { TaskItemType } from "../common/types";
import Form from "../components/Form";

interface INewTaskForm {
  selectedTask: TaskItemType;
}

const NewTaskForm = ({ selectedTask }: INewTaskForm) => {
  return (
    <div className="flex justify-center w-full">
      <Form mode="new" selectedTask={selectedTask} />
    </div>
  );
};

export default NewTaskForm;
