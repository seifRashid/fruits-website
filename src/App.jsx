import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/Login";
import Cart from "./components/Cart";
import { useCart } from "./Contexts/CartContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// ... other pages

function App() {
  const { cartOn } = useCart();
  // const boxRef = useRef()

  useGSAP(() => {
    if (cartOn) {
      gsap.fromTo(".boxref",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'elastic' }
      );
    } else {
      gsap.to(".boxref",
        { opacity: 0, y: 20, duration: 1, ease: 'power2.in' }
      );
    }
  }, [cartOn]);
  return (
    <Router>
      <Navbar />
      <div className="boxref flex w-full justify-end" >{cartOn && <Cart />}</div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
