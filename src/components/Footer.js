import React from "react";
import { Button } from "@material-ui/core";
import { Twitter, Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import "../styles/footer.scss";

const TopSearches = () => {
	const topSearches = [
		"football teams looking",
		"for players",
		"free",
		"wanted",
		"keyboard player for band",
		"sofa",
		"garden",
		"garden furniture",
		"boat",
		"jobs",
		"jobs part time",
		"Immediate start",
		"part time",
		"car",
		"van",
		"caravan",
		"campervan",
		"trailer",
		"kittens",
		"puppies",
		"dog",
		"cat",
		"frech bulldog",
		"private house to rent",
		"house to rent",
		"room to rent",
		"room",
		"rent",
	];

	return (
		<div className='top-searches mt-5'>
			<div className='container'>
				<div>
					<h4>Top Searches</h4>
					<ul>
						{topSearches.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<>
			<TopSearches />
			<div className='footer-container'>
				<div className='container'>
					<div className='row pt-5'>
						<div className='col-md-3'>
							<div className='footer-contents'>
								<h1>About Us</h1>
								<ul>
									<li>About AYC</li>
									<li>Advertise With Us</li>
									<li>Careers</li>
									<li>Media</li>
									<li>Press</li>
								</ul>
							</div>
						</div>
						<div className='col-md-3'>
							<div className='footer-contents'>
								<h1>Help & Contact</h1>
								<ul>
									<li>FAQs</li>
									<li>Safety</li>
									<li>Policies</li>
									<li>Contact Us</li>
									<li>Insurance</li>
								</ul>
							</div>
						</div>
						<div className='col-md-3'>
							<div className='footer-contents'>
								<h1>More From Us</h1>
								<ul>
									<li>Car Guides</li>
									<li>AYC Life</li>
									<li>Car Price Index</li>
									<li>Sell My Car</li>
									<li>Upcycle Revolution</li>
									<li>Popular Searches</li>
								</ul>
							</div>
						</div>
						<div className='col-md-3'>
							<div className='footer-contents'>
								<h1>Follow Us</h1>
								<Button>
									<Facebook /> Facebook
								</Button>
								<Button>
									<Instagram /> Instagram
								</Button>
								<Button>
									<Twitter /> Twitter
								</Button>
								<Button>
									<LinkedIn /> LinkedIn
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className='footer-close'>
					<small>AYC Business Group ltd All Right Reserved</small>
				</div>
			</div>
		</>
	);
};

export default Footer;
