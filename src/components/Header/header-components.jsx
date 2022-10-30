import React from "react";
import { useState, useEffect, Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { updateProfile, onAuthStateChanged } from "firebase/auth";
import { signOutUser, auth } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../Context/user.context-component";
import { GrReactjs } from "react-icons/gr";
import LoginAvatar from "../../assets/LoginAvatar.png";

import "./header-component-style.css";

const Header = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	// const [displayName, setdisplayName] = useState("");
	const signOutHandler = async () => {
		await signOutUser();
		setCurrentUser(null);
		// setdisplayName(null);
	};

	const user = auth.currentUser;
	console.log("called");
	// onAuthStateChanged(auth, (user) => {
	// 	if (user) {
	// 		setCurrentUser(user);
	// 		// setdisplayName(user.displayName);
	// 	} else {
	// 		signOutHandler();
	// 	}
	// });

	return (
		<Fragment>
			<div className="container-fluid bg-warning bg-gradient p-2 d-flex justify-content-between">
				<i className="fa-solid fa-truck me-5 fst-italic">
					<span className="ms-1 custom-font-family">
						Free delivery over $100
					</span>
				</i>
				<i className="fa-solid fa-person-walking-arrow-loop-left fst-italic">
					<span className="ms-1 custom-font-family">Free return in 30days</span>
				</i>
			</div>
			<div className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient">
				<div className="col">
					<div className="d-flex justify-content-between">
						<Link className=" ms-3" to="/">
							<GrReactjs
							// className="logo-icon fa-5x"
							// style={{ color: "white" }}
							// size={50}
							/>
						</Link>
						<ShoppingIcon className="mx-auto" />
						<button
							className="navbar-toggler me-2"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarScroll"
							aria-controls="navbarScroll"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
					</div>
				</div>
				<div className="col collapse navbar-collapse" id="navbarScroll">
					<ul className="navbar-nav me-auto  ms-2">
						<li className="nav-item ">
							<Link
								className="nav-link navbar-brand"
								// style={{
								// 	textDecoration: "none",
								// 	color: "goldenrod",
								// 	fontWeight: "bold",
								// 	// fontSize: 18,
								// }}
								to="/"
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link navbar-brand"
								// style={{
								// 	textDecoration: "none",
								// 	color: "goldenrod",
								// 	fontWeight: "bold",
								// 	// fontSize: 20,
								// }}
								to="/new-arrival"
							>
								New Arrival
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link navbar-brand"
								// style={{
								// 	textDecoration: "none",
								// 	color: "goldenrod",
								// 	fontWeight: "bold",
								// 	// fontSize: 20,
								// }}
								to="/shop"
							>
								Shop
							</Link>
						</li>

						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle navbar-brand text-capitalize "
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								// style={{
								// 	textDecoration: "none",
								// 	color: "goldenrod",
								// 	fontWeight: "bold",
								// }}
								to="/categories"
							>
								Categories
							</Link>
							<ul
								className="dropdown-menu mt-3"
								aria-labelledby="navbarDropdown"
							>
								<li>
									<Link className="dropdown-item font-monospace" to="/sale">
										Sneakers
									</Link>
								</li>
								<hr className="dropdown-divider" />

								<li>
									<Link className="dropdown-item font-monospace" to="/sale">
										Clothes
									</Link>
								</li>

								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link className="dropdown-item font-monospace" to="/sale">
										Hats
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<div className="me-5">
						{user ? (
							<span className="btn dropdown">
								<a
									href="#"
									className="text-decoration-none dropdown-toggle navbar-brand"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<img
										src={user.photoURL}
										alt="photoURL"
										width="32"
										height="32"
										className="rounded"
									/>
									<span
										className="ms-1 me-auto fw-1 "
										style={{
											fontSize: 14,
										}}
									>
										<span className="font-monospace">{user.displayName}</span>
									</span>
								</a>
								<ul className="dropdown-menu text-dark ms-3 mt-2">
									<Link
										className="dropdown-item font-monospace"
										type="button"
										style={{
											fontSize: 14,
											textTransform: "text-capitalize",
										}}
										to="/dashboard"
									>
										Dashboard
									</Link>
									<hr className="dropdown-divider" />

									<Link
										className="dropdown-item font-monospace"
										type="button"
										style={{
											fontSize: 14,
											textTransform: "text-capitalize",
										}}
										onClick={signOutHandler}
										to="/"
									>
										Sign Out
									</Link>
								</ul>
							</span>
						) : (
							<Link
								className="btn btn-outline-dark bg-gradient ms-2 me-5 text-white"
								to="/login"
							>
								Login
							</Link>
						)}
					</div>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Header;
