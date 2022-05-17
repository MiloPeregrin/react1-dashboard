import Form from "../components/Form";
import Page from "../components/Page";
import { useTaskContext } from "../hooks/useTaskContext";
import { useParams } from "react-router-dom";
import { newTaskObject } from "../common/utility";

const EditTaskPage = () => {
  const { tasks, initialFormData } = useTaskContext();
  const params = useParams();

  const currentTask = tasks.find((item) => item.id === params.id);
  const initialData = tasks.find((item) => item.id === currentTask?.id);

  const getInitialData = () => {
    if (initialFormData != newTaskObject) {
      return initialFormData;
    } else {
      return initialData!;
    }
  };

  return (
    <div>
      <Page showDashboard={false}>
        <Form mode="edit" initialFormData={getInitialData()} />
      </Page>
    </div>
  );
};

export default EditTaskPage;
