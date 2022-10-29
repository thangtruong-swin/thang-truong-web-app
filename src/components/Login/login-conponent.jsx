import { Fragment, useContext } from "react";
import { useEffect, useState } from "react";
import {
	getRedirectResult,
	updateProfile,
	onAuthStateChanged,
} from "firebase/auth";
import Header from "../Header/header-components";
import { UserContext } from "../../Context/user.context-component";
import LoginAvatar from "../../assets/image.png";
import {
	signInWithGooglePopup,
	auth,
	createUserDocumentFromAuth,
	signInWithGoogleRedirect,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./login-component-styles.css";

const defaultFormFields = {
	email: "",
	password: "",
};
const Login = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);

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
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();

		const userDocRef = await createUserDocumentFromAuth(user);
		setCurrentUser(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const user = auth.currentUser;
		if (user !== null) {
			// The user object has basic properties such as display name, email, etc.
			const displayName = user.displayName;
			console.log("displayName: ", displayName);

			const email = user.email;
			console.log("email: ", email);

			const photoURL = user.photoURL;
			console.log("photoURL: ", photoURL);

			const emailVerified = user.emailVerified;
			console.log("emailVerified: ", emailVerified);

			// The user's ID, unique to the Firebase project. Do NOT use
			// this value to authenticate with your backend server, if
			// you have one. Use User.getToken() instead.
			const uid = user.uid;
		}
		// const user = auth.currentUser;
		// const displayName = user.displayName;
		// if (user !== null) {
		// 	user.providerData.forEach((profile) => {
		// 		console.log("Sign-in provider: " + profile.providerId);
		// 		console.log("  Provider-specific UID: " + profile.uid);
		// 		console.log("  Name: " + profile.displayName);
		// 		console.log("  Email: " + profile.email);
		// 		console.log("  Photo URL: " + profile.photoURL);
		// 	});
		// }
		// try {
		// 	const { user } = await signInAuthUserWithEmailAndPassword(
		// 		email,
		// 		password,
		// 		displayName
		// 	);
		// 	setCurrentUser(user);
		// 	// console.log(user);
		// 	resetFormFields();
		// } catch (error) {
		// 	console.log("user sign in failed", error);
		// }
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};
	return (
		<Fragment>
			<Header />
			<form onSubmit={handleSubmit}>
				<div className="container-sm">
					<img
						src={LoginAvatar}
						alt="LoginAvatar"
						className="mx-auto d-block"
					/>
					<h1 className="h3 mb-3 fw-normal text-center text-danger fs-2">
						Please Sign-in
					</h1>
					<div className="form-floating col-lg-4 mx-auto">
						<input
							type="email"
							className="form-control"
							id="floatingInputEmail"
							placeholder="Email address"
							required
							name="email"
							value={email}
							onChange={handleChange}
						/>
						<label htmlFor="floatingInputEmail">
							Please enter email address
						</label>
					</div>
					<div className="form-floating mt-3 col-lg-4 mx-auto">
						<input
							type="password"
							className="form-control"
							id="floatingInputPassword"
							placeholder="Enter Password"
							required
							name="password"
							value={password}
							onChange={handleChange}
						/>
						<label htmlFor="floatingInputPassword">Please enter Password</label>
					</div>

					<div className="d-flex justify-content-center col-lg-4 mx-auto mt-3">
						<button className="w-50 btn  btn-dark me-3" type="submit">
							Sign in
						</button>
						<button
							className="w-50 btn btn-primary "
							type="submit"
							onClick={logGoogleUser}
						>
							<img
								width="20px"
								alt="Google sign-in"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
								className="me-2"
							/>
							Sign in with Google
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
					<div className="checkbox mb-3 mt-3 col-lg-4 mx-auto d-grid gap-2">
						<button
							type="reset"
							className="btn btn-danger btn-lg btn-block mb-2"
							value="Reset"
						>
							Reset
						</button>
					</div>
				</div>
			</form>
		</Fragment>
	);
};

export default Login;
