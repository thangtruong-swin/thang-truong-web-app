import { useContext, Fragment } from "react";

import { CartContext } from "../../Context/cart.context";

import CheckoutItem from "./checkout-item.component";
import Navbar from "../navigation/navbar-components";
// import Table from "react-bootstrap/Table";
let ReactBsTable = require("react-bootstrap-table");
let BootstrapTable = ReactBsTable.BootstrapTable;
let TableHeaderColumn = ReactBsTable.TableHeaderColumn;

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<Fragment>
			<Navbar />
			<div className="container">
				<h2 className="text-center mt-5 text-danger text-uppercase font-monospace">
					review check-out page
				</h2>
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
			</div>
		</Fragment>
	);
};

export default Checkout;
