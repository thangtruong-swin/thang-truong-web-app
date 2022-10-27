import { Fragment } from "react";
import Header from "../Header/header-components";

const SignUp = () => {
	return (
		<Fragment>
			<Header />
			<div className="container mt-5">
				<form>
					<div className="row mb-4">
						<div className="col">
							<div className="form-outline">
								<input
									type="text"
									id="form3Example1"
									className="form-control"
								/>
								<label className="form-label" htmlFor="form3Example1">
									First name
								</label>
							</div>
						</div>
						<div className="col">
							<div className="form-outline">
								<input
									type="text"
									id="form3Example2"
									className="form-control"
								/>
								<label className="form-label" htmlFor="form3Example2">
									Last name
								</label>
							</div>
						</div>
					</div>

					<div className="form-outline mb-4">
						<input type="email" id="form3Example3" className="form-control" />
						<label className="form-label" htmlFor="form3Example3">
							Email address
						</label>
					</div>

					<div className="form-outline mb-4">
						<input
							type="password"
							id="form3Example4"
							className="form-control"
						/>
						<label className="form-label" htmlFor="form3Example4">
							Password
						</label>
					</div>

					<div className="form-check d-flex justify-content-center mb-4">
						<input
							className="form-check-input me-2"
							type="checkbox"
							value=""
							id="form2Example33"
						/>
						<label className="form-check-label" htmlFor="form2Example33">
							Subscribe to our newsletter
						</label>
					</div>
					<div className="text-center">
						<button
							type="submit"
							className="btn btn-dark btn-lg btn-block mb-4 "
						>
							Sign up
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
			</div>
		</Fragment>
	);
};

export default SignUp;
