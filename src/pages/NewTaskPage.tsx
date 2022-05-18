import Form from "../components/Form";
import Page from "../components/Page";

const NewTaskPage = () => {
  return (
    <div>
      <Page showDashboard={false}>
        <Form
          mode="new"
          initialFormData={{
            id: "",
            state: "Ready",
            name: "",
            detail: "",
          }}
        />
      </Page>
    </div>
  );
};

export default NewTaskPage;
