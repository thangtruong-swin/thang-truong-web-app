import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { BsCart3 } from "react-icons/bs";

import { CartContext } from "../../Context/cart.context";

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
	// const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	const navigate = useNavigate();

	const handcleCheckOutPage = () => {
		navigate("/checkout");
	};
	return (
		<div
			className="mx-auto mt-1 nav-item dropdown"
			onClick={handcleCheckOutPage}
		>
			<BsCart3 style={{ color: "black" }} size={35} cursor="pointer">
				{/* <span className="text-danger mt-2">0</span> */}
			</BsCart3>
			{cartCount > 0 ? (
				<span className="ms-1 mt-2 position-absolute top-3 translate-middle badge rounded-pill bg-primary">
					{cartCount}
				</span>
			) : (
				""
			)}
		</div>
	);
};

export default CartIcon;
