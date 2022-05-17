import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import Page from "../components/Page";
import { useTaskContext } from "../hooks/useTaskContext";

const EditTaskPage = () => {
  const { tasks, initialFormData, setFormData } = useTaskContext();
  const params = useParams();

  useEffect(() => {
    const currentTask = tasks.find((item) => item.id === params.id);
    const initialData = tasks.find((item) => item.id === currentTask!.id);
    if (initialData) {
      setFormData(initialData);
    }
  }, []);

  return (
    <div>
      <Page showDashboard={false}>
        <Form mode="edit" initialFormData={initialFormData} />
      </Page>
    </div>
  );
};

export default EditTaskPage;
