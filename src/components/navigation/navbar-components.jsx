import React from "react";
import { useState, useEffect, Fragment, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import CartIcon from "../cart-icon/cartIcon ";
import { signOutUser, auth } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../Context/user.context-component";
import { CartContext } from "../../Context/cart.context";
import Categories from "../Categories/categories-review.component";
import { CategoriesContext } from "../../Context/categories.context";

import { GrReactjs } from "react-icons/gr";

import "./navbar-component-style.css";

const Header = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const { categoriesMap } = useContext(CategoriesContext);

	const signOutHandler = async () => {
		await signOutUser();
		setCurrentUser(null);
	};

	const user = auth.currentUser;
	// console.log("called");

	return (
		<Fragment>
			<div className="container-fluid bg-secondary bg-gradient p-3 d-flex justify-content-between ">
				<i className="fa-solid fa-truck me-5 fst-italic">
					<span className="ms-1 custom-font-family">
						Free delivery over $100
					</span>
				</i>
				<i className="fa-solid fa-person-walking-arrow-loop-left fst-italic">
					<span className="ms-1 custom-font-family">Free return in 30days</span>
				</i>
			</div>
			<div className="navbar navbar-expand-lg navbar-dark bg-white bg-gradient border-bottom">
				<div className="col ">
					<div className="d-flex justify-content-between">
						<Link className="ms-3" to="/">
							<GrReactjs
								className="mt-1"
								style={{ color: "black" }}
								size={35}
							/>
						</Link>
						<CartIcon />
						{/* go to checkout page */}
						{/* {isCartOpen && <CartDropdown />} */}
						<button
							className="navbar-toggler me-2 border border-dark bg-secondary"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarScroll"
							aria-controls="navbarScroll"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon text-dark fw-bold"></span>
						</button>
					</div>
				</div>
				<div className="col collapse navbar-collapse " id="navbarScroll">
					<ul className="navbar-nav me-auto  ms-2 ">
						<li className="nav-item ">
							<Link className="nav-link navbar-brand text-dark fw-bold " to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link navbar-brand text-dark fw-bold"
								to="/new-arrival"
							>
								New Arrival
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link
								className="nav-link navbar-brand text-dark fw-bold "
								to="/shop"
							>
								Shop
							</Link>
						</li> */}

						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle navbar-brand text-capitalize text-dark fw-bold"
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
								{Object.keys(categoriesMap).map((title) => (
									<Fragment key={title}>
										<li>
											<Link
												className="dropdown-item font-monospace text-capitalize"
												to={`/categories/${title}`}
											>
												{title}
											</Link>
										</li>
										<hr className="dropdown-divider" />
									</Fragment>
								))}
							</ul>
						</li>
					</ul>
					<div className="me-5">
						{user ? (
							<span className="btn dropdown">
								<a
									href="#"
									className="text-decoration-none dropdown-toggle navbar-brand text-dark fw-bold"
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
										<span className="font-monospace text-dark fw-bold">
											{user.displayName}
										</span>
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
								className="btn btn-outline-dark bg-gradient ms-2 me-5 text-dark fw-bold"
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
