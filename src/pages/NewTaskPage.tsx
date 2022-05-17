import Form from "../components/Form";
import Page from "../components/Page";
import { useTaskContext } from "../hooks/useTaskContext";

const NewTaskPage = () => {
  const { initialFormData } = useTaskContext();

  return (
    <div>
      <Page showDashboard={false}>
        <Form mode="new" initialFormData={initialFormData} />
      </Page>
    </div>
  );
};

export default NewTaskPage;
