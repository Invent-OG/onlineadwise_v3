import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FloatingWidgets from "@/components/ui/FloatingWidgets";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
};

export default Layout;
