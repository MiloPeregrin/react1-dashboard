import Dashboard from "../components/Dashboard";
import Page from "../components/Page";

const DashboardPage = () => {
  return (
    <Page showDashboard={true}>
      <Dashboard />
    </Page>
  );
};

export default DashboardPage;
