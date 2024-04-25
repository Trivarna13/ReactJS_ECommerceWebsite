import React from "react";
import "./mainStyles.css";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<header>
			<nav className="nav1">
				<div className="left">
					<span>Welcome to my E-shop</span>
					<NavLink to="/signup">Register</NavLink> OR
					<NavLink to="/">Login</NavLink>
				</div>
				<div className="right">
					<i className="fa-brands fa-facebook-f"></i>
					<i className="fa-brands fa-instagram"></i>
					<i className="fa-brands fa-whatsapp"></i>
					<i className="fa-brands fa-twitter"></i>
					<i className="fa-brands fa-pinterest"></i>
				</div>
			</nav>

			<div className="nav2">
				<div className="nav2-left">
					<i className="fa fa-phone"></i> +91 1325047698 <br />
					<i className="fa fa-envelope"></i> styleHive@gmail.com
				</div>
				<div className="nav2-center">
					<h1>
						Style<span>Hive</span>
					</h1>
					<p>Everything for Your world</p>
				</div>
				<div className="nav2-right">
					<i className="fa fa-map"></i> Contact us
				</div>
			</div>
		</header>
	);
}

export default Navbar;
