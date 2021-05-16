import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import HelpIcon from "@material-ui/icons/Help";
import CategorySlider from "./CategorySlider";

import "../../styles/body.scss";

function Body() {
	// functional component
	const Trending = () => {
		return (
			<div className='container'>
				<h3>Trending on AYC</h3>
				<div className='row'>
					<div className='col-md-3'>
						<div className='trending-container'>
							<img src='/assets/img/pic01.jpg' alt='' />
							<p>Trendig from AYC business group</p>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='trending-container'>
							<img src='/assets/img/pic02.jpg' alt='' />
							<p>Trendig from AYC business group</p>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='trending-container'>
							<img src='/assets/img/pic03.jpg' alt='' />
							<p>Trendig from AYC business group</p>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='trending-container'>
							<img src='/assets/img/pic02.jpg' alt='' />
							<p>Trendig from AYC business group</p>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const BrowseByCategory = () => {
		return (
			<div className='container'>
				<h3>Browse by category</h3>
				<div className='row'>
					<div className='col-md-2 mb-3'>
						<div className='category-container'>
							<img src='/assets/img/pic01.jpg' alt='' />
							<div className='details'>
								<p>Category Name</p>
								<div>
									<a href='/'>
										View details <ArrowRightIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-2 mb-3'>
						<div className='category-container'>
							<img src='/assets/img/pic01.jpg' alt='' />
							<div className='details'>
								<p>Category Name</p>
								<div>
									<a href='/'>
										View details <ArrowRightIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-2 mb-3'>
						<div className='category-container'>
							<img src='/assets/img/pic01.jpg' alt='' />
							<div className='details'>
								<p>Category Name</p>
								<div>
									<a href='/'>
										View details <ArrowRightIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-2 mb-3'>
						<div className='category-container'>
							<img src='/assets/img/pic01.jpg' alt='' />
							<div className='details'>
								<p>Category Name</p>
								<div>
									<a href='/'>
										View details <ArrowRightIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-2 mb-3'>
						<div className='category-container'>
							<img src='/assets/img/pic01.jpg' alt='' />
							<div className='details'>
								<p>Category Name</p>
								<div>
									<a href='/'>
										View details <ArrowRightIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-2 mb-3'>
						<div className='category-container'>
							<img src='/assets/img/pic01.jpg' alt='' />
							<div className='details'>
								<p>Category Name</p>
								<div>
									<a href='/'>
										View details <ArrowRightIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-2 mb-3'>
						<div className='category-container'>
							<img src='/assets/img/pic01.jpg' alt='' />
							<div className='details'>
								<p>Category Name</p>
								<div>
									<a href='/'>
										View details <ArrowRightIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-2 mb-3'>
						<div className='category-container'>
							<img src='/assets/img/pic01.jpg' alt='' />
							<div className='details'>
								<p>Category Name</p>
								<div>
									<a href='/'>
										View details <ArrowRightIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-2 mb-3'>
						<div className='category-container'>
							<img src='/assets/img/pic01.jpg' alt='' />
							<div className='details'>
								<p>Category Name</p>
								<div>
									<a href='/'>
										View details <ArrowRightIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-2 mb-3'>
						<div className='category-container'>
							<img src='/assets/img/pic01.jpg' alt='' />
							<div className='details'>
								<p>Category Name</p>
								<div>
									<a href='/'>
										View details <ArrowRightIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-2 mb-3'>
						<div className='category-container'>
							<img src='/assets/img/pic01.jpg' alt='' />
							<div className='details'>
								<p>Category Name</p>
								<div>
									<a href='/'>
										View details <ArrowRightIcon />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const Brefing = () => {
		return (
			<div className='container'>
				<div className='brifing-container shadow'>
					<div className='row'>
						<div className='col-md-8 mb-3'>
							<h1>Buy And Sell Everything with AYC Business Group</h1>
							<h3>Providing the most compelling services is our culture</h3>
						</div>
						<div className='col-md-4 mb-3'>
							<Button className='bg-primary'>
								<div>Learn More</div>
								<div>
									<ArrowRightIcon />
								</div>
							</Button>
							<Button variant='contained' className='bg-info'>
								<div>Get Help</div>
								<div>
									<HelpIcon />
								</div>
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const CarDeals = () => {
		const carsFew = [
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/pic03.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/pic03.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/pic03.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/pic03.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/pic03.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/pic03.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/pic03.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/pic03.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/pic03.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/pic03.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/pic03.jpg",
			},
		];
		return (
			<div className='container mt-5'>
				<CategorySlider data={carsFew} categoryName='Car Deals' />
			</div>
		);
	};

	return (
		<div className='body-container'>
			<Trending />
			<BrowseByCategory />
			<Brefing />
			<CarDeals />
		</div>
	);
}

export default Body;
