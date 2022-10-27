import { Fragment } from "react";
import Header from "../Header/header-components";
import LoginAvatar from "../../assets/image.png";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./login-component-styles.css";
import userEvent from "@testing-library/user-event";

const Login = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		// userEvent.displayName;
		// const response = await signInWithGooglePopup();
		console.log(user);
		console.log(user.displayName);
		const userDocRef = await createUserDocumentFromAuth(user);
		console.log(userDocRef);
	};

	return (
		<Fragment>
			<Header />
			<div className="container w-50 ">
				<img src={LoginAvatar} alt="LoginAvatar" className="mx-auto d-block" />
				<h1 className="h3 mb-3 fw-normal text-center text-danger">
					Please sign in
				</h1>
				<div className="form-floating">
					<input
						type="email"
						className="form-control"
						id="floatingInputEmail"
						placeholder="Email address"
					/>
					<label htmlFor="floatingInputEmail">Email address</label>
				</div>
				<div className="form-floating mt-3">
					<input
						type="password"
						className="form-control"
						id="floatingInputPassword"
						placeholder="Enter Password"
					/>
					<label htmlFor="floatingInputPassword">Enter Password</label>
				</div>

				<div className="checkbox mb-3 mt-3">
					<label>
						<input type="checkbox" value="remember-me" /> Remember me
					</label>
					<label>
						<input
							type="reset"
							className="btn btn-outline-dark btn-sm ms-3"
							value="Reset "
						/>
					</label>
				</div>
				<div className="d-flex justify-content-center">
					<button className="w-50 btn  btn-outline-dark me-3" type="submit">
						Sign in
					</button>
					<button
						className="w-50 btn btn-outline-primary "
						type="submit"
						onClick={logGoogleUser}
					>
						<img
							width="20px"
							alt="Google sign-in"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
							className="me-2"
						/>
						Sign in with Google Popup
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
