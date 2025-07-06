
import { Outlet } from "react-router-dom";
import EnhancedNavbar from "../navigation/EnhancedNavbar";
import Footer from "../Footer";
import SalesSupport from "../plugins/SalesSupport";
import ChatPlugin from "../chat/ChatPlugin";
import { NotificationProvider } from "@/contexts/NotificationContext";

const MainLayout = () => {
  return (
    <NotificationProvider>
      <div className="min-h-screen flex flex-col">
        <EnhancedNavbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <SalesSupport />
        <ChatPlugin />
      </div>
    </NotificationProvider>
  );
};

export default MainLayout;
