import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import Cart from "./components/Cart";
import { useCart } from "./Contexts/CartContext";
import CategoryPage from "./pages/CategoryPage";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// ... other pages

function App() {
  const { cartOn } = useCart();

  return (
    <Router>
      <Navbar />
      <div className="boxref flex w-full justify-end" >{cartOn && <Cart />}</div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/catalogue" element={<CategoryPage />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
