import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<>product</>} />
          <Route path="cart" element={<Cart />} />
          {/* More child routes can be added here */}
        </Route>
        {/* Additional routes can go here */}
      </Routes>
    </Router>
  );
};
export default App;
