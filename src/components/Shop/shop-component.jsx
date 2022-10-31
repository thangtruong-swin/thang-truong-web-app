import React from "react";
import { useState, useEffect, Fragment, useContext } from "react";
import { ProductsContext } from "../../Context/products.context";
import Header from "../navigation/navbar-components";
import ProductCard from "../product-card/product-card.component";

const Shop = () => {
	const { products } = useContext(ProductsContext);
	return (
		<Fragment>
			<Header />
			<div className="container-fluid mt-3">
				<div className="d-flex justify-content-around">
					<div className="col-2 d-none d-xl-block">
						<div className="text-center fs-3 fw-bold text-uppercase font-monospace">
							<p>top sales</p>
						</div>
						<div className="row mb-0 text-muted font-monospace fs-5 fw-bold text-uppercase">
							<div className="mt-3">
								<p className="text-muted ">Comming soon . . .</p>
							</div>
							<div className="mt-3">
								<p className="text-muted ">Comming soon . . .</p>
							</div>
							<div className="mt-3">
								<p className="text-muted ">Comming soon . . .</p>
							</div>
						</div>
					</div>
					<div className="col-10">
						<div className="text-center fs-3 fw-bold text-uppercase font-monospace">
							<p>Recommended for you</p>
						</div>
						<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
							{products.map((product) => (
								<div className="d-flex justify-content-evenly">
									<ProductCard key={product.id} product={product} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
// d-flex-sm justify-content-center d-flex justify-content-end
export default Shop;
