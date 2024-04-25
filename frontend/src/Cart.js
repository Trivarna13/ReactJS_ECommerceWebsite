import React from "react";
import Nav3 from "./Nav3";
import "./mainStyles.css";
import img1 from "./img/f3.jpg";
import img2 from "./img/f4.jpg";
import img3 from "./img/f7.jpg";
import img4 from "./img/f2.jpg";
import img5 from "./img/f8.jpg";
import img6 from "./img/f5.jpg";
import img7 from "./img/n1.jpg";
import img8 from "./img/f6.jpg";
import cartData from "./cart.json";

function Cart() {
	const totalAmount = cartData.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div>
			<Nav3 />
			<table className="cart-table">
				<thead className="cart-thead">
					<tr>
						<th>Image</th>
						<th>Item Name</th>
						<th>Price</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody className="cart-tbody">
					{cartData.map((item) => (
						<tr key={item.id}>
							<td>
								{}
								<img
									src={getImageSrc(item.imgPath)}
									alt={item.name}
								/>
							</td>
							<td>{item.name}</td>
							<td>${item.price}</td>
							<td>{item.quantity}</td>
						</tr>
					))}
					<tr>
						<td colSpan="3" className="total-amount">
							Total Amount
						</td>
						<td>${totalAmount}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

function getImageSrc(imgPath) {
	switch (imgPath) {
		case "img/f3.jpg":
			return img1;
		case "img/f4.jpg":
			return img2;
		case "img/f7.jpg":
			return img3;
		case "img/f2.jpg":
			return img4;
		case "img/f8.jpg":
			return img5;
		case "img/f5.jpg":
			return img6;
		case "img/n1.jpg":
			return img7;
		case "img/f6.jpg":
			return img8;
		default:
			return "";
	}
}

export default Cart;
