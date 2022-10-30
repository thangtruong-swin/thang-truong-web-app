import React from "react";
import { useState, useEffect, Fragment, useContext } from "react";
import { ProductsContext } from "../../Context/products.context";
import Header from "../Header/header-components";
import ProductCard from "../product-card/product-card.component";

const Shop = () => {
	const { products } = useContext(ProductsContext);
	return (
		<Fragment>
			<Header />
			<div className="container mt-3">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
					{products.map((product) => (
						<div className="d-flex justify-content-around">
							<ProductCard key={product.id} product={product} />
						</div>
					))}
				</div>
			</div>
		</Fragment>
	);
};

export default Shop;
