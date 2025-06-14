
import { Outlet } from "react-router-dom";
import EnhancedNavbar from "../navigation/EnhancedNavbar";
import Footer from "../Footer";
import SalesSupport from "../plugins/SalesSupport";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <SalesSupport />
    </div>
  );
};

export default MainLayout;
