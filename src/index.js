import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/user.context-component";
import { ProductsProvider } from "./Context/products.context";
import { CartProvider } from "./Context/cart.context";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ProductsProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</ProductsProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
