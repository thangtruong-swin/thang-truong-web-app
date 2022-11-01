import { Fragment, useContext } from "react";
import Navbar from "../navigation/navbar-components";
import News from "../news/news-component";
import ProductCard from "../product-card/product-card.component";

import { CategoriesContext } from "../../Context/categories.context";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Footer from "../footer/footer-component";

const Categories = () => {
	const { title } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);

	const responseCategory = () => {
		let filteredCartegory = [];
		Object.keys(categoriesMap).forEach((key) => {
			if (key.toLowerCase() === title.toLowerCase()) {
				// console.log( key, categoriesMap[ key ] );
				filteredCartegory = categoriesMap[key];
			}
		});
		return filteredCartegory;
	};

	return (
		<Fragment>
			<Navbar />
			<div className="container mt-3">
				<div className="row row-cols-2">
					<News />
					<div className="col-xxl-10 col-12">
						<div className="text-center fs-1 fw-bold text-uppercase font-monospace ">
							<p>Category - {title}</p>
						</div>
						<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
							{responseCategory().map((product) => (
								<Fragment key={product.id}>
									<div className="d-flex justify-content-evenly">
										<ProductCard product={product} />
									</div>
								</Fragment>
							))}
						</div>
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</Fragment>
	);
};

export default Categories;
