import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Context/user.context-component";
import Navbar from "./components/navigation/navbar-components";
import Home from "./components/home/home.component";
import NewArrivalComponent from "./components/New-Arrival/new-arrival-component";
import Sale from "./components/Sale/sale-component";
import Shop from "./components/Shop/shop-component";
import Categories from "./components/Categories/categories-component";
import SignIn from "./components/Authentication/Sign-In/sign-In.conponent";
import SignUp from "./components/Authentication/SignUp/sign-up-component";
import Checkout from "./components/checkout/checkout.component";
import Dashboard from "./components/Dashboard/dashboard-component";
import { getAuth } from "firebase/auth";
import "./App.css";

function App() {
	const { currentUser } = useContext(UserContext);
	const auth = getAuth();
	const user = auth.currentUser;

	return (
		<Routes>
			<Route path="/" element={<Navbar />}></Route>
			<Route index element={<Shop />} />

			<Route path="/new-arrival" element={<NewArrivalComponent />}></Route>
			<Route path="/sale" element={<Sale />}></Route>
			<Route path="/shop" element={<Shop />}></Route>
			<Route path="/categories" element={<Categories />}></Route>
			<Route
				path="/login"
				element={user ? <Navigate to="/" replace /> : <SignIn />}
			></Route>
			<Route
				path="/sign-up"
				element={user ? <Navigate to="/" replace /> : <SignUp />}
			></Route>
			<Route path="/dashboard" element={<Dashboard />}></Route>
			<Route path="/checkout" element={<Checkout />} />
		</Routes>
	);
}

export default App;
