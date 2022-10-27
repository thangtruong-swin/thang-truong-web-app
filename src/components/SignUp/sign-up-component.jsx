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
			<form onSubmit={handleSubmit} className="container mt-5 w-50">
				<div className="row mb-4">
					<div className="col">
						<div className="form-outline">
							<input
								type="text"
								id="form3Example1"
								className="form-control"
								required
								onChange={handleChange}
								name="displayName"
								value={displayName}
							/>
							<label className="form-label" htmlFor="form3Example1">
								Display name
							</label>
						</div>
					</div>
				</div>

				<div className="form-outline mb-4">
					<input
						type="email"
						id="form3Example3"
						className="form-control"
						required
						onChange={handleChange}
						name="email"
						value={email}
					/>
					<label className="form-label" htmlFor="form3Example3">
						Email address
					</label>
				</div>

				<div className="form-outline mb-4">
					<input
						type="password"
						id="password"
						className="form-control"
						required
						onChange={handleChange}
						name="password"
						value={password}
					/>
					<label className="form-label" htmlFor="password">
						Password
					</label>
				</div>
				<div className="form-outline mb-4">
					<input
						type="password"
						id="confirmpassword"
						className="form-control"
						required
						onChange={handleChange}
						name="confirmPassword"
						value={confirmPassword}
					/>
					<label className="form-label" htmlFor="confirmpassword">
						Confirm Password
					</label>
				</div>

				<div className="text-center">
					<button
						type="submit"
						className="btn btn-dark btn-sm btn-block mb-4 me-3"
						onClick={handleSubmit}
					>
						Sign up
					</button>
					<button
						type="reset"
						className="btn btn-dark btn-sm btn-block mb-4 "
						onClick={resetFormFields}
					>
						Reset
					</button>
				</div>

				<div className="text-center">
					<p>or sign up with:</p>
					<button type="button" className="btn btn-primary btn-floating mx-1">
						<i className="fab fa-facebook-f"></i>
					</button>

					<button type="button" className="btn btn-primary btn-floating mx-1">
						<i className="fab fa-google"></i>
					</button>

					<button type="button" className="btn btn-primary btn-floating mx-1">
						<i className="fab fa-twitter"></i>
					</button>

					<button type="button" className="btn btn-primary btn-floating mx-1">
						<i className="fab fa-github"></i>
					</button>
				</div>
			</form>
		</Fragment>
	);
};

export default SignUp;
