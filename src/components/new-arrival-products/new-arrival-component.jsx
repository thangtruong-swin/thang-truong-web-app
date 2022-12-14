import { useState, useEffect, Fragment, useContext } from "react";
import { CategoriesContext } from "../../Context/categories.context";
import Navbar from "../navigation/navbar-components";
import News from "../news/news-component";
import ProductCard from "../product-card/product-card.component";
import Footer from "../footer/footer-component";

const NewArrivalComponent = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<Fragment>
			<Navbar />
			<div className="container mt-3">
				<div className="row row-cols-2">
					<News />
					<div className="col-xxl-10 col-12">
						<div className="text-center fs-1 fw-bold text-uppercase font-monospace">
							<p>Latest products</p>
						</div>
						{Object.keys(categoriesMap).map((title) => (
							<Fragment key={title}>
								<p className="mt-5 fw-bold fs-4 text-uppercase bg-light text-danger font-monospace">
									Category - {title}
								</p>
								<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
									{categoriesMap[title]
										.filter((product) => product.newArrival === true)
										.map((newArrivalproduct) => (
											<Fragment key={newArrivalproduct.id}>
												<div className="d-flex justify-content-evenly">
													<ProductCard product={newArrivalproduct} />
												</div>
											</Fragment>
										))}
								</div>
							</Fragment>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default NewArrivalComponent;
