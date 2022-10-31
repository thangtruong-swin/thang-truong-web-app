import { useContext } from "react";

import { CartContext } from "../../Context/cart.context";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);
	const addProductToCart = () => addItemToCart(product);
	return (
		<div className="mt-3">
			{/* <p className="mb-0 text-muted font-monospace fs-5 fw-bold text-uppercase">
				{name}
			</p> */}
			{product.newArrival ? (
				<span
					className="badge rounded-pill text-bg-danger mt-2"
					style={{
						position: "absolute",
					}}
				>
					New Arrival
				</span>
			) : (
				""
			)}
			<img
				src={imageUrl}
				alt={`${name}`}
				className="rounded"
				style={{
					width: "250px",
					height: "300px",
					cursor: "pointer",
				}}
			/>
			<div className="d-flex justify-content-between ">
				<span className="text-muted  font-monospace fs-6 fw-bold text-uppercase">
					{name}
				</span>

				<span className="text-muted">${price}</span>
			</div>

			<button className="btn btn-dark btn-sm" onClick={addProductToCart}>
				Add to card
			</button>
		</div>
	);
};

export default ProductCard;
