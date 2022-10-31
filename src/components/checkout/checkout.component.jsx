import { useContext, Fragment } from "react";

import { CartContext } from "../../Context/cart.context";

import CheckoutItem from "./checkout-item.component";
import Navbar from "../navigation/navbar-components";
import Footer from "../footer/footer-component";

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<Fragment>
			<Navbar />
			<div className="container">
				<h1 className="text-center mt-5 text-danger text-uppercase font-monospace">
					review check-out page
				</h1>
				{cartItems.length > 0 ? (
					<Fragment>
						<table class="table table-hover mt-5 table-bordered">
							<thead className="fw-bold bg-secondary bg-gradient text-uppercase text-dark">
								<tr>
									<th className="col-1 text-center">#</th>
									<th className="col-1 text-center">Product</th>
									<th className="col">Description</th>
									<th className="col text-center">Quantity</th>
									<th className="col text-center">Price</th>
									<th className="col"></th>
								</tr>
							</thead>
							<tbody>
								{cartItems.map((cartItem, index) => (
									<tr key={index} className="text-muted">
										<CheckoutItem
											key={cartItem.id}
											cartItem={cartItem}
											index={index}
										/>
									</tr>
								))}
							</tbody>
						</table>
						<div className="d-flex justify-content-end">
							<span className="total fw-bold fs-4 me-3">
								TOTAL: ${cartTotal}.00
							</span>
							<button className="btn btn-dark btn-sm">Check out</button>
						</div>
					</Fragment>
				) : (
					<p className="text-center fs-5 mt-5 text-muted text-uppercase font-monospace">
						Your Cart is empty for now .
					</p>
				)}
			</div>
			<div className="fixed-bottom">
				<Footer />
			</div>
		</Fragment>
	);
};

export default Checkout;
