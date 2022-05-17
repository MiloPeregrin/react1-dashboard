import Header from "../components/Header";

interface IPage {
  children: React.ReactNode;
  showDashboard: boolean;
}

const Page = ({ children, showDashboard }: IPage) => {
  return (
    <div className="flex flex-col items-center bg-slate-100 min-h-screen max-h-fit px-3">
      <Header showDashboard={showDashboard} />
      <main className="w-full max-w-7xl">{children}</main>
    </div>
  );
};

export default Page;
