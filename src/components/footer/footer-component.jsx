import { Fragment } from "react";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
	return (
		<Fragment>
			<div class="container-fluid bg-light  text-center fs-6 fw-bold">
				<footer class="p-3 mt-5 d-flex justify-content-evenly">
					<span class="text-center ">&copy; 2022 </span>
					<span>Developed by Thang Truong - thangtruong1808@gmail.com</span>
					<div className="text-primary">
						<span className="mx-3">
							<a href="https://www.facebook.com/profile.php?id=100051753410222">
								<ImFacebook2 size={30} />
							</a>
						</span>
						<span>
							<a href="https://www.linkedin.com/in/thang-truong-00b245200/">
								<BsLinkedin size={30} />
							</a>
						</span>
					</div>
				</footer>
			</div>
		</Fragment>
	);
};

export default Footer;
