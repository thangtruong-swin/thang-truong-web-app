import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { GrReactjs } from "react-icons/gr";
import "./header-component-style.css";

const Header = () => {
	return (
		<Fragment>
			<div className="container-fluid bg-warning bg-gradient p-2 ">
				<i className="fa-solid fa-truck me-5 fst-italic">
					<span className="ms-2 custom-font-family">
						Free Delivery over $100
					</span>
				</i>
				<i className="fa-solid fa-person-walking-arrow-loop-left fst-italic">
					<span className="ms-2 custom-font-family">Free Return</span>
				</i>
			</div>
			<div className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient">
				<div className="col">
					<div className="d-flex justify-content-between">
						<Link className="navbar-brand ms-3" to="/">
							<GrReactjs
								className="logo-icon fa-5x "
								style={{ color: "white" }}
								size={70}
							/>
						</Link>
						<ShoppingIcon className="mt-1 text-dark" />
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
				<div className="col collapse navbar-collapse fs-6 " id="navbarScroll">
					<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ms-2 text-uppercase">
						<li className="nav-item">
							<Link
								className="nav-link"
								style={{
									textDecoration: "none",
									color: "goldenrod",
									fontWeight: "bold",
									fontSize: 20,
								}}
								to="/"
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								style={{
									textDecoration: "none",
									color: "goldenrod",
									fontWeight: "bold",
									fontSize: 20,
								}}
								to="/new-arrival"
							>
								New Arrival
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link"
								style={{
									textDecoration: "none",
									color: "goldenrod",
									fontWeight: "bold",
									fontSize: 20,
								}}
								to="/sale"
							>
								Sale
							</Link>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link"
								style={{
									textDecoration: "none",
									color: "goldenrod",
									fontWeight: "bold",
									fontSize: 20,
								}}
								to="/shop"
							>
								Shop
							</Link>
						</li>
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								style={{
									textDecoration: "none",
									color: "goldenrod",
									fontWeight: "bold",
									fontSize: 20,
								}}
								to="/categories"
							>
								Categories
							</Link>
							<ul className="dropdown-menu " aria-labelledby="navbarDropdown">
								<li>
									<Link className="dropdown-item" to="/shop">
										Action
									</Link>
								</li>

								<li>
									<Link className="dropdown-item" to="/shop">
										Action 2
									</Link>
								</li>

								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link className="dropdown-item" to="/shop">
										Action 3
									</Link>
								</li>
							</ul>
						</li>

						<li className="nav-item">
							<Link
								className="nav-link"
								style={{
									textDecoration: "none",
									color: "goldenrod",
									fontWeight: "bold",
									fontSize: 20,
								}}
								to="/contact-us"
							>
								Contact Us
							</Link>
						</li>
					</ul>
					<div className="ms-2">
						<Link
							className="btn btn-outline-dark bg-gradient me-2"
							style={{
								textDecoration: "none",
								color: "black",
								fontWeight: "bold",
								fontSize: 16,
							}}
							to="/login"
						>
							Login
						</Link>

						{/* <Link
							className="btn btn-outline-dark bg-gradient me-2"
							style={{
								textDecoration: "none",
								color: "black",
								fontWeight: "bold",
								fontSize: 16,
							}}
							to="/sign-up"
						>
							Sign-up
						</Link> */}
						{/* 
						<Link
							className="btn btn-outline-dark bg-gradient me-2"
							style={{
								textDecoration: "none",
								color: "black",
								fontWeight: "bold",
								fontSize: 16,
							}}
							to="/dashboard"
						>
							Dashboard
						</Link> */}
					</div>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Header;