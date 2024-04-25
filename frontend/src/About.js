import React from "react";
import Nav3 from "./Nav3";
import aboutImg2 from "./img/a2.jpg";
import freeDeliveryImg from "./img/free-delivery.png";
import onlineShoppingImg from "./img/online-shopping.png";
import piggyBankImg from "./img/piggy-bank.png";
import promotionImg from "./img/promotion.png";
import sellerImg from "./img/seller.png";
import telephoneImg from "./img/telephone.png";
import "./mainStyles.css";

function About() {
	return (
		<main>
			<Nav3 />
			<div id="page-header2" className="about-header">
				<h1>#KnowUs</h1>
				<p>EVERYDAY NEW OFFER'S</p>
			</div>
			<div className="about-container">
				<section className="about-section">
					<div className="about-image">
						<img src={aboutImg2} alt="About Us Image" />
					</div>
					<div className="about-info">
						<h1>Welcome to StyleHilve</h1>
						<p>
							At StyleHilve Family, we are dedicated to providing
							the best products for our customers. Our mission is
							to offer high-quality apparel and accessories that
							reflect the unique style and personality of each
							individual.
						</p>
						<p>
							With a focus on creativity and innovation, we strive
							to exceed expectations and inspire confidence in
							every purchase. Join the StyleHilve Family today!
						</p>
					</div>
				</section>
			</div>
			<div id="feature">
				<div className="feature-box">
					<img src={freeDeliveryImg} alt="" />
					<h6>Free Shipping</h6>
				</div>
				<div className="feature-box">
					<img src={onlineShoppingImg} alt="" />
					<h6>Online Order</h6>
				</div>
				<div className="feature-box">
					<img src={piggyBankImg} alt="" />
					<h6>Save Money</h6>
				</div>
				<div className="feature-box">
					<img src={promotionImg} alt="" />
					<h6>Promotions</h6>
				</div>
				<div className="feature-box">
					<img src={sellerImg} alt="" />
					<h6>Happy Sell</h6>
				</div>
				<div className="feature-box">
					<img src={telephoneImg} alt="" />
					<h6>24/7 Support</h6>
				</div>
			</div>
		</main>
	);
}

export default About;
