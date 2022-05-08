import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

interface IPage {
  children: React.ReactNode;
}

const Page = ({ children }: IPage) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return (
    <div className="flex flex-col items-center bg-slate-100 min-h-screen max-h-fit px-3">
      <Header />
      <main className="w-full max-w-7xl">{children}</main>
    </div>
  );
};

export default Page;
