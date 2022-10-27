import Header from "../Header/header-components";
import { Fragment, useState, useContext } from "react";
import { UserContext } from "../../Context/user.context-component";

import {
	CreateAuthWithUserAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};
const SignUp = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
		// console.log(formFields);
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("password does not matching");
			return;
		}

		try {
			const { user } = await CreateAuthWithUserAndPassword(
				email,
				password,
				displayName
			);
			setCurrentUser(user);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();

			// console.log("response: ", user);
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
								placeholder="Please Enter Display Name"
								className="form-control"
								required
								onChange={handleChange}
								name="displayName"
								value={displayName}
							/>
							<label htmlFor="formFloatingDisplayName">Display name</label>
						</div>

						<div className="form-floating mt-3 col-lg-4 mx-auto">
							<input
								type="email"
								id="formFloatingEmail"
								placeholder="Please Enter Email Address"
								className="form-control"
								required
								onChange={handleChange}
								name="email"
								value={email}
							/>
							<label htmlFor="formFloatingEmail">Email address</label>
						</div>

						<div className="form-floating mt-3 col-lg-4 mx-auto">
							<input
								type="password"
								id="formFloatingPassword"
								placeholder="Please Enter Password"
								className="form-control"
								required
								onChange={handleChange}
								name="password"
								value={password}
							/>
							<label htmlFor="formFloatingPassword">Password</label>
						</div>
						<div className="form-floating mt-3 col-lg-4 mx-auto">
							<input
								type="password"
								id="formFloatingConfirmpassword"
								placeholder="Please Enter Confirm Password"
								className="form-control"
								required
								onChange={handleChange}
								name="confirmPassword"
								value={confirmPassword}
							/>
							<label htmlFor="formFloatingConfirmpassword">
								Confirm Password
							</label>
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
		</Fragment>
	);
};

export default SignUp;
