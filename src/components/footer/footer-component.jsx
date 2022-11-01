import { Fragment } from "react";
import { ImFacebook2 } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
	return (
		<Fragment>
			<footer className="mt-5 container-fluid bg-light text-muted">
				<div className="text-primary text-center pt-2">
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
				<div className="text-center font-monospace py-2">
					&copy; 2022 - Developed by - thangtruong1808@gmail.com
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
