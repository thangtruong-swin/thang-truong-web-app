const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	return (
		<div className="mt-3">
			<img
				src={imageUrl}
				alt={`${name}`}
				className="rounded"
				style={{
					width: "300px",
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
