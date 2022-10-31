const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	return (
		<div className="mt-3">
			<p className="mb-0 text-muted font-monospace fs-5 fw-bold text-uppercase">
				{name}
			</p>
			<img
				src={imageUrl}
				alt={`${name}`}
				className="rounded"
				style={{
					width: "240px",
					height: "300px",
					cursor: "pointer",
				}}
			/>
			<div className="d-flex justify-content-between ">
				<span className="text-muted ">{name}</span>

				<span className="text-muted">${price}</span>
			</div>
			<button className="btn btn-dark btn-sm">Add to card</button>
		</div>
	);
};

export default ProductCard;
