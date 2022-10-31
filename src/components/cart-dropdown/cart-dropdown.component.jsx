import React from "react";
import "./cart-dropdown.styles.css";
const CartDropdown = () => (
	// cart-dropdown-container
	<div
		className="border border-dark rounded-3 "
		style={{
			position: "absolute",
			width: "300px",
			// display: "flex",
			// direction: "column",
			top: "63px",
			left: "150px",
			// zindex: "-5",
		}}
	>
		<div className="cart-items" />
		<button className="btn btn-dark">GO TO CHECKOUT</button>
	</div>
);

export default CartDropdown;
