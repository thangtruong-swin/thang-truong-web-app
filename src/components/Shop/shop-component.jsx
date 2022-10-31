import React from "react";
import { useState, useEffect, Fragment, useContext } from "react";
import { CategoriesContext } from "../../Context/categories.context";
import Navbar from "../navigation/navbar-components";
import ProductCard from "../product-card/product-card.component";

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<Fragment>
			<Navbar />
			<div className="container-fluid mt-3">
				<div className="d-flex justify-content-around">
					<div className="col-2 d-none d-xxl-block border-end">
						<div className="text-danger fs-5 fw-bold text-uppercase font-monospace">
							<p>Hot products</p>
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
						<div className="text-center fs-1 fw-bold text-uppercase font-monospace">
							<p>Recommended for you</p>
						</div>

						{Object.keys(categoriesMap).map((title) => (
							<Fragment key={title}>
								<p className="mt-5 mx-5 fw-bold fs-4 text-uppercase bg-light text-danger font-monospace">
									Category - {title}
								</p>

								<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
									{categoriesMap[title].map((product) => (
										<div className="d-flex justify-content-evenly">
											<ProductCard key={product.id} product={product} />
										</div>
									))}
								</div>
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default Shop;
