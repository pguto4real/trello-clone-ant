import { NavBar } from "./_components/navBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-full">
    <NavBar/>
    {children}</div>;
};

export default DashboardLayout;
