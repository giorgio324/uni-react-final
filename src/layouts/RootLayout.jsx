import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
    </div>
  );
};
export default RootLayout;
