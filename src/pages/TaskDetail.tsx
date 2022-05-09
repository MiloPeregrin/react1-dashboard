import { TaskItemType } from "../common/types";
import Form from "../components/Form";

interface ITaskDetail {
  selectedTask: TaskItemType;
}

const TaskDetail = ({ selectedTask }: ITaskDetail) => {
  return <Form mode="edit" selectedTask={selectedTask} />;
};

export default TaskDetail;
