import React from "react";
import Nav3 from "./Nav3";
import "./mainStyles.css";
import Add from "./Add";
import { NavLink } from "react-router-dom";
import img1 from "./img/f3.jpg";
import img2 from "./img/f4.jpg";
import img3 from "./img/f7.jpg";
import img4 from "./img/f2.jpg";
import img5 from "./img/f8.jpg";
import img6 from "./img/f5.jpg";
import img7 from "./img/n1.jpg";
import img8 from "./img/f6.jpg";

function Home() {
	return (
		<div>
			<Nav3 />
			<div className="homeContainer">
				<Add />
				<section className="latest">
					<div className="product-intro">
						<h1>
							Best <span>Selling</span> Products
						</h1>
						<p>For the Royal Bee Family</p>
					</div>
					<div className="card-container">
						<div className="card off">
							<div>
								<img src={img1} alt="" />
							</div>
							<h1>Gear Roses T-Shirt</h1>
							<span>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</span>
							<p>$559.00</p>
							<NavLink to="/Cart" className="cart-link">
								<i className="fa fa-shopping-cart"></i>Add to
								cart
							</NavLink>
						</div>

						<div className="card off">
							<div>
								<img src={img2} alt="" />
							</div>
							<h1>Roor Pleasant T-Shirt</h1>
							<span>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</span>
							<p>$489.00</p>
							<NavLink to="/Cart" className="cart-link">
								<i className="fa fa-shopping-cart"></i>Add to
								cart
							</NavLink>
						</div>

						<div className="card off">
							<div>
								<img src={img3} alt="" />
							</div>
							<h1>Roxie Palazzo</h1>
							<span>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</span>
							<p>$177.00</p>
							<NavLink to="/Cart" className="cart-link">
								<i className="fa fa-shopping-cart"></i>Add to
								cart
							</NavLink>
						</div>

						<div className="card off">
							<div>
								<img src={img4} alt="" />
							</div>
							<h1>BeeGive Green Leaves T-Shirt</h1>
							<span>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</span>
							<p>$300.00</p>
							<NavLink to="/Cart" className="cart-link">
								<i className="fa fa-shopping-cart"></i>Add to
								cart
							</NavLink>
						</div>
					</div>
					<div className="card-container">
						<div className="card off">
							<div>
								<img src={img5} alt="" />
							</div>
							<h1>Indie Party T-Shirt</h1>
							<span>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</span>
							<p>$59.00</p>
							<NavLink to="/Cart" className="cart-link">
								<i className="fa fa-shopping-cart"></i>Add to
								cart
							</NavLink>
						</div>

						<div className="card off">
							<div>
								<img src={img6} alt="" />
							</div>
							<h1>Roor Party T-Shirt</h1>
							<span>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</span>
							<p>$289.00</p>
							<NavLink to="/Cart" className="cart-link">
								<i className="fa fa-shopping-cart"></i>Add to
								cart
							</NavLink>
						</div>

						<div className="card off">
							<div>
								<img src={img7} alt="" />
							</div>
							<h1>Opti Formal T-Shirt</h1>
							<span>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</span>
							<p>$677.00</p>
							<NavLink to="/Cart" className="cart-link">
								<i className="fa fa-shopping-cart"></i>Add to
								cart
							</NavLink>
						</div>

						<div className="card off">
							<div>
								<img src={img8} alt="" />
							</div>
							<h1>Indie Orange & Blue T-Shirts</h1>
							<span>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</span>
							<p>$500.00</p>
							<NavLink to="/Cart" className="cart-link">
								<i className="fa fa-shopping-cart"></i>Add to
								cart
							</NavLink>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Home;
