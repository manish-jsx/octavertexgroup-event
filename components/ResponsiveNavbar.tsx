import FloatingNavbar from "./FloatingNavbar";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

const ResponsiveNavbar = () => {
  return (
    <>
      {/* Desktop Navbar - hidden on mobile */}
      <div className="hidden lg:block">
        <Navbar />
        <FloatingNavbar />
      </div>

      {/* Mobile Navbar - visible only on mobile */}
      <MobileNavbar />
    </>
  );
};

export default ResponsiveNavbar;
