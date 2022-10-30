import Header from "../../Header/header-components";
import { Fragment, useState, useContext, useEffect } from "react";
import { UserContext } from "../../../Context/user.context-component";
import { Outlet, Link } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { ref, getStorage, getDownloadURL, uploadBytes } from "firebase/storage";
import {
	CreateAuthWithUserAndPassword,
	createUserDocumentFromAuth,
	auth,
} from "../../../utils/firebase/firebase.utils";
const defaultFormFields = {
	displayName: "",
	email: "",
	photoURL: "",
	password: "",
	confirmPassword: "",
};
const SignUp = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
		// console.log(formFields.displayName);
	};

	const storage = getStorage();

	const handleSubmit = async (event) => {
		event.preventDefault();
		let photoURL =
			"https://firebasestorage.googleapis.com/v0/b/thang-truong-db.appspot.com/o/LoginAvatar.png?alt=media&token=a55ca574-eb99-4345-b5f6-d9bbc9ef2301";
		if (password !== confirmPassword) {
			alert("password does not matching");
			return;
		}
		try {
			const { user } = await CreateAuthWithUserAndPassword(email, password);

			await createUserDocumentFromAuth(user, {
				displayName,
				photoURL,
			});

			// Updating user name
			await updateProfile(auth.currentUser, {
				displayName,
				photoURL,
			});

			// .then(function () {
			// 	console.log("user.displayName-updateProfile: ", user.displayName);
			// 	console.log("user.photoURL: ", user.photoURL);
			// });
			resetFormFields();
			setCurrentUser(user);
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Email-already-in-use");
			}
			console.log("errors from User creation", error);
		}
	};
	return (
		<Fragment>
			<Header />
			<form onSubmit={handleSubmit}>
				<div className="container-sm mt-2">
					<fieldset className="border ">
						<legend className="float-none w-auto p-2 text-center text-danger fs-2">
							Please Sign-up
						</legend>
						<div className="form-floating mt-3 col-lg-4 mx-auto">
							<input
								type="text"
								id="formFloatingDisplayName"
								placeholder="Display name"
								className="form-control"
								required
								onChange={handleChange}
								name="displayName"
								value={displayName}
							/>
							<label htmlFor="formFloatingDisplayName" className="text-muted">
								Display name
							</label>
						</div>

						<div className="form-floating mt-3 col-lg-4 mx-auto">
							<input
								type="email"
								id="formFloatingEmail"
								placeholder="Email address"
								className="form-control"
								required
								onChange={handleChange}
								name="email"
								value={email}
							/>
							<label htmlFor="formFloatingEmail" className="text-muted">
								Email address
							</label>
						</div>
						{/* File Picker
						<div className="form-floating mt-3 col-lg-4 mx-auto">
							<input
								type="file"
								id="formFloatingFileUpload"
								placeholder="Please Choose file to upload"
								className="form-control"
								required
								onChange={handleChange}
								name="photoURL"
								value={photoURL}
							/>
							<label htmlFor="formFloatingFileUpload"></label>
						</div> */}

						<div className="form-floating mt-3 col-lg-4 mx-auto">
							<input
								type="password"
								id="formFloatingPassword"
								placeholder="Please enter password"
								className="form-control"
								required
								onChange={handleChange}
								name="password"
								value={password}
							/>
							<label htmlFor="formFloatingPassword" className="text-muted">
								Please enter password
							</label>
						</div>
						<div className="form-floating mt-3 col-lg-4 mx-auto">
							<input
								type="password"
								id="formFloatingConfirmpassword"
								placeholder="Please enter confirm password"
								className="form-control"
								required
								onChange={handleChange}
								name="confirmPassword"
								value={confirmPassword}
							/>
							<label
								htmlFor="formFloatingConfirmpassword"
								className="text-muted"
							>
								Please enter confirm password
							</label>
						</div>
						<div className="form-floating mt-3 col-lg-4 mx-auto text-center">
							<span>Already have an account ?</span>
							<Link to="/login" className="text-decoration-none">
								{" "}
								Please Sign-In
							</Link>
						</div>

						<div className="text-center mt-3 col-lg-4 mx-auto d-grid gap-2">
							<button
								type="submit"
								className="btn btn-dark btn-lg btn-block "
								onClick={handleSubmit}
							>
								Sign up
							</button>
							<button
								type="reset"
								className="btn btn-danger btn-lg btn-block mb-2"
								onClick={resetFormFields}
								value="Reset"
							>
								Reset
							</button>
						</div>
					</fieldset>
				</div>
			</form>
			<Outlet />
		</Fragment>
	);
};

export default SignUp;
