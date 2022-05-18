import Form from "../components/Form";
import Page from "../components/Page";
import { useTaskContext } from "../hooks/useTaskContext";
import { useParams } from "react-router-dom";

const EditTaskPage = () => {
  const { tasks } = useTaskContext();
  const params = useParams();

  const currentTask = tasks.find((item) => item.id === params.id);
  const initialData = tasks.find((item) => item.id === currentTask?.id);

  return (
    <div>
      <Page showDashboard={false}>
        {initialData && <Form mode="edit" initialFormData={initialData} />}
      </Page>
    </div>
  );
};

export default EditTaskPage;
