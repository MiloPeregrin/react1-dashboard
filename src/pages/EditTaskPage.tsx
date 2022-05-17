import Form from "../components/Form";
import Page from "../components/Page";
import { useTaskContext } from "../hooks/useTaskContext";

const EditTaskPage = () => {
  const { initialFormData } = useTaskContext();

  return (
    <div>
      <Page showDashboard={false}>
        <Form mode="edit" initialFormData={initialFormData} />
      </Page>
    </div>
  );
};

export default EditTaskPage;
