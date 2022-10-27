import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Context/user.context-component";
import Header from "./components/Header/header-components";
import NewArrivalComponent from "./components/New-Arrival/new-arrival-component";
import Sale from "./components/Sale/sale-component";
import Shop from "./components/Shop/shop-component";
import Categories from "./components/Categories/categories-component";
import Contactus from "./components/ContactUs/contactus-component";
import Login from "./components/Login/login-conponent";
import SignUp from "./components/SignUp/sign-up-component";
import Dashboard from "./components/Dashboard/dashboard-component";
import "./App.css";

function App() {
	const { currentUser } = useContext(UserContext);
	// alert(currentUser);
	return (
		<Routes>
			<Route path="/" element={<Header />}></Route>
			<Route path="/new-arrival" element={<NewArrivalComponent />}></Route>
			<Route path="/sale" element={<Sale />}></Route>
			<Route path="/shop" element={<Shop />}></Route>
			<Route path="/categories" element={<Categories />}></Route>
			<Route path="/contact-us" element={<Contactus />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/sign-up" element={<SignUp />}></Route>
			<Route path="/dashboard" element={<Dashboard />}></Route>
		</Routes>
	);
}

export default App;
