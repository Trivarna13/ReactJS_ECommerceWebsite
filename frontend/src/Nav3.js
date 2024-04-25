import React from "react";
import "./mainStyles.css";
import { NavLink } from "react-router-dom";

function Nav3() {
	return (
		<nav className="nav3">
			<ul>
				<li>
					<NavLink to="/home">
						<i className="fa fa-home"></i>Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about">
						<i className="fa-solid fa-calendar-check"></i>About
					</NavLink>
				</li>
				<li>
					<NavLink to="/cart">
						<i className="fa fa-shopping-cart"></i>Cart
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav3;
