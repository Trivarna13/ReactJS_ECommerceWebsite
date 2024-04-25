import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./mainStyles.css";

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const nav = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			name: name,
			email: email,
			password: password,
		};

		try {
			const response = await axios.post(
				"http://localhost:8081/signup",
				data
			);
			nav("/");
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="container">
			<div className="form-container">
				<h2>Sign Up</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">
							<strong>Name</strong>
						</label>
						<input
							type="text"
							placeholder="Enter Name"
							className="form-control"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">
							<strong>Email</strong>
						</label>
						<input
							type="email"
							placeholder="Enter Email"
							className="form-control"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">
							<strong>Password</strong>
						</label>
						<input
							type="password"
							placeholder="Enter password"
							className="form-control"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="btn btn-success"
						style={{ width: "100%" }}
					>
						Sign Up
					</button>
					<p>You agree to our terms and policies</p>
					<NavLink to="/">
						<div className="btn btn-default btn:hover">Log In</div>
					</NavLink>
				</form>
			</div>
		</div>
	);
}

export default Signup;
