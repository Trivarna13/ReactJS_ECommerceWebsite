import React from "react";
import { Link } from "react-router-dom";
import "./mainStyles.css";

function Add() {
	return (
		<div className="add">
			<div className="container2">
				<div className="row2">
					<div className="col-md-12">
						<div className="caption">
							<h1>
								<span>Stay</span> Comfortable, <br />
								Look
								<span> Stylish</span>
							</h1>
							<div className="line-dec"></div>
							<p>
								Trade-in-offer!
								<br />
								Super value deals On All Products!
								<br />
								Save more with coupons & up to 70% off!
							</p>
							<div className="main-button">
								<Link to="/cart">Order Now!</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Add;
