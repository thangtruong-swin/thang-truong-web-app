import { Fragment, useContext } from "react";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import Header from "../Header/header-components";
import { UserContext } from "../../Context/user.context-component";

import LoginAvatar from "../../assets/image.png";
import {
	auth,
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import "./login-component-styles.css";

const Login = () => {
	// useEffect(() => {
	// 	// Should be wrap by a functoin
	// 	const loadUser = async () => {
	// 		const repsonse = await getRedirectResult(auth);
	// 		if (repsonse) {
	// 			const userDocRef = await createUserDocumentFromAuth(repsonse.user);
	// 			console.log(userDocRef);
	// 		}
	// 	};

	// 	// then call it here
	// 	loadUser();
	// }, []);

	const { setCurrentUser } = useContext(UserContext);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		// console.log(user);

		const userDocRef = await createUserDocumentFromAuth(user);
		// console.log(userDocRef);
		setCurrentUser(user);
		// console.log(user.displayName);
		// console.log(user.photoURL);
	};
	// const logGoogleRedirectUser = async () => {
	// 	const { user } = await signInWithGoogleRedirect();
	// 	console.log(user);
	// };
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
					<label htmlFor="floatingInputEmail">Please enter email address</label>
				</div>
				<div className="form-floating mt-3">
					<input
						type="password"
						className="form-control"
						id="floatingInputPassword"
						placeholder="Enter Password"
					/>
					<label htmlFor="floatingInputPassword">Please enter Password</label>
				</div>

				<div className="checkbox mb-3 mt-3">
					{/* <label>
						<input type="checkbox" value="remember-me" /> Remember me
					</label> */}
					<label>
						<input
							type="reset"
							className="btn btn-outline-dark btn-sm"
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
					{/* <button
						className="w-50 btn btn-outline-primary ms-3"
						type="submit"
						onClick={logGoogleRedirectUser}
					>
						<img
							width="20px"
							alt="Google sign-in"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
							className="me-2"
						/>
						Sign in with Google Redirect
					</button> */}
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
