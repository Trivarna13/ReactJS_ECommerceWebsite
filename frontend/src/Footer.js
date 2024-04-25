import React from "react";
import "./mainStyles.css";
import footer_img1 from "./img/play.jpg";
import footer_img2 from "./img/app.jpg";
import footer_img3 from "./img/pay.png";
import { NavLink } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<div className="col">
				<div className="footer-container">
					<h1>
						Style<span>Hive</span>
					</h1>
					<h3>Contact</h3>
					<p>
						<strong>Address:</strong> 13 Diagon Alley, Street 24,
						London
					</p>
					<p>
						<strong>Phone:</strong> +91 1325047698
					</p>
					<p>
						<strong>Hours:</strong> 10:00 - 20:00, Mon - Sun
					</p>
					<div className="follow">
						<h3>Follow us</h3>
						<div className="icon">
							<i className="fa-brands fa-facebook-f"></i>
							<i className="fa-brands fa-instagram"></i>
							<i className="fa-brands fa-whatsapp"></i>
							<i className="fa-brands fa-twitter"></i>
							<i className="fa-brands fa-pinterest"></i>
						</div>
					</div>
				</div>
			</div>
			<div className="col">
				<h3>About</h3>
				<NavLink to="/about">About Us</NavLink>
				<a href="#">Delivery Information</a>
				<a href="#">Privacy Policy</a>
				<a href="#">Terms &amp; Conditions</a>
				<a href="#">Contact Us</a>
			</div>

			<div className="col">
				<h3>My Account</h3>
				<NavLink to="/signup">Sign In</NavLink>
				<a href="#">View Cart</a>
				<a href="#">My Wishlist</a>
				<a href="#">Track My Order</a>
				<a href="#">Help</a>
			</div>
			<div class="col install">
				<h3>Install App</h3>
				<p>From Google Play or App Store</p>
				<div class="footer-row">
					<img src={footer_img1} alt="" />
					<img src={footer_img2} alt="" />
					<p>Secured Payment Gateways</p>
					<img src={footer_img3} alt="" />
				</div>
			</div>

			<div className="copyright">
				<p>© 2024, StyleHive - E Commerce Website</p>
			</div>
		</footer>
	);
}

export default Footer;
