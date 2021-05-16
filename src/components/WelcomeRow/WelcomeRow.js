import React from "react";
import "../../styles/welcomeRow.scss";
import SliderPage from "./SliderPage";

import { Button } from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";

const WelcomeRight = () => {
	return (
		<div className='row-container'>
			<div
				className='rw'
				// style={{ backgroundImage: "url(/assets/img/bg.jpg)" }}
			>
				<div className='w-100'>
					<p>We sell all kinds of computers desktop and laptops</p>
					<button>Shop Now</button>
				</div>
				<div>
					<img src='/assets/img/products/2.png' alt='' />
				</div>
			</div>
			<div className='rw'>
				<div className='w-100'>
					<p>We sell all kinds of computers desktop and laptops</p>
					<button>Shop Now</button>
				</div>
				<div>
					<img src='/assets/img/products/1.png' alt='' />
				</div>
			</div>
			<div
				className='rw'
				// style={{ backgroundImage: "url(/assets/img/bg.jpg)" }}
			>
				<div className='w-100'>
					<p>High Display Televisions on discount. get yours!</p>
					<button>Shop Now</button>
				</div>
				<div>
					<img src='/assets/img/products/3.png' alt='' />
				</div>
			</div>
		</div>
	);
};
const WelcomeRow = () => {
	return (
		<div className='Welcome-container'>
			<div className='row'>
				<div className='col left-bar md-4 p-0'>
					<div className='intro'>
						<p>
							Providing the most compelling quality services is our culture.
						</p>
						<div className='btns-container'>
							<Button variant='contained'>About AYC</Button>
							<Button variant='contained'>Servises</Button>
							<Button variant='contained'>Help?</Button>
						</div>
						<p>Follow us on:</p>
						<div className='intro-btns-2'>
							<Button variant='contained'>
								<Facebook />
							</Button>
							<Button variant='contained'>
								<Twitter />
							</Button>
							<Button variant='contained'>
								<Instagram />
							</Button>
						</div>
					</div>
				</div>
				<div className='col md-4 p-0'>
					<SliderPage />
				</div>
				<div className='col right-bar md-4 p-0'>
					<WelcomeRight />
				</div>
			</div>
		</div>
	);
};

export default WelcomeRow;
