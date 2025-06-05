
import { Outlet } from "react-router-dom";
import EnhancedNavbar from "../navigation/EnhancedNavbar";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
