import { Fragment } from "react";
import Header from "../Header/header-components";
const NewArrivalComponent = () => {
	return (
		<Fragment>
			<Header />
			<div className="container mt-3">
				<h3>New products are comming soon . . .</h3>
			</div>
		</Fragment>
	);
};

export default NewArrivalComponent;
