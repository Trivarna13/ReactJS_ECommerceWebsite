import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./mainStyles.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const nav = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:8081/login", {
				email,
				password,
			});
			if (response.data === "Success") {
				nav("/home");
			} else {
				alert("No record existed");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div className="container">
			<div className="form-container">
				<h2>Log In</h2>
				<form onSubmit={handleSubmit}>
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
						Log In
					</button>
					<p>You agree to our terms and policies</p>
					<NavLink to="/signup">
						<div className="btn btn-default btn:hover">Sign Up</div>
					</NavLink>
				</form>
			</div>
		</div>
	);
}

export default Login;
