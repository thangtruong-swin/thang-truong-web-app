import { Fragment, useContext } from "react";

import { CartContext } from "../../Context/cart.context";

const CheckoutItem = ({ cartItem, index }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const { clearItemFromCart, addItemToCart, removeItemToCart } =
		useContext(CartContext);

	const clearItemHandler = () => clearItemFromCart(cartItem);
	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemToCart(cartItem);

	return (
		<Fragment>
			<th style={{ verticalAlign: "middle" }} className="text-center">
				{" "}
				{parseInt(index) + 1}
			</th>
			<th className="text-center">
				<img
					className="rounded "
					src={imageUrl}
					alt={`${name}`}
					style={{ width: "70px", height: "70px" }}
				/>
			</th>
			<th className="" style={{ verticalAlign: "middle" }}>
				{name}
			</th>
			<th className="text-center" style={{ verticalAlign: "middle" }}>
				<span
					className="btn btn-primary btn-sm"
					onClick={removeItemHandler}
					style={{ cursor: "pointer" }}
				>
					&#10094;
				</span>
				<span className="mx-2">{quantity}</span>
				<span
					onClick={addItemHandler}
					style={{ cursor: "pointer" }}
					className="btn btn-primary btn-sm"
				>
					&#10095;
				</span>
			</th>
			<th style={{ verticalAlign: "middle" }} className="text-center">
				${price}{" "}
			</th>
			<th style={{ verticalAlign: "middle" }} className="text-center">
				<button className="btn btn-danger btn-sm" onClick={clearItemHandler}>
					Remove
				</button>
			</th>
			{/* <div className="checkout-item-container">
				<div className="image-container">
					<img src={imageUrl} alt={`${name}`} />
				</div>
				<span className="name"> {name} </span>
				<span className="quantity">
					<div className="arrow" onClick={removeItemHandler}>
						&#10094;
					</div>
					<span className="value">{quantity}</span>
					<div className="arrow" onClick={addItemHandler}>
						&#10095;
					</div>
				</span>
				<span className="price"> {price}</span>
				<div className="remove-button" onClick={clearItemHandler}>
					&#10005;
				</div>
			</div> */}
		</Fragment>
	);
};

export default CheckoutItem;
