import React from "react";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./SignUp";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import Navbar from "./Navbar";
import "./mainStyles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./Footer";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
