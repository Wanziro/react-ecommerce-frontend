import React from "react";
import ArrowRightIcon from "@material-ui/icons/ChevronRight";
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
							<img src='/assets/img/trending/1.jpg' alt='' />
							<p>Trendig from AYC business group</p>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='trending-container'>
							<img src='/assets/img/trending/2.jpg' alt='' />
							<p>Trendig from AYC business group</p>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='trending-container'>
							<img src='/assets/img/trending/3.jpg' alt='' />
							<p>Trendig from AYC business group</p>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='trending-container'>
							<img src='/assets/img/trending/4.jpg' alt='' />
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
							<img src='/assets/img/categories/3.jpg' alt='' />
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
							<img src='/assets/img/categories/7.jpg' alt='' />
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
							<img src='/assets/img/categories/1.jpg' alt='' />
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
							<img src='/assets/img/categories/2.jpg' alt='' />
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
							<img src='/assets/img/categories/3.jpg' alt='' />
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
							<img src='/assets/img/categories/4.jpg' alt='' />
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
							<img src='/assets/img/categories/5.jpg' alt='' />
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
							<img src='/assets/img/categories/6.jpg' alt='' />
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
							<img src='/assets/img/categories/7.jpg' alt='' />
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
							<img src='/assets/img/categories/8.jpg' alt='' />
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
							<img src='/assets/img/categories/9.jpg' alt='' />
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
							<img src='/assets/img/categories/10.jpg' alt='' />
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
				url: "/assets/img/cars/1.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/cars/2.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/cars/3.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/cars/4.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/cars/5.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/cars/6.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/cars/7.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/cars/8.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/cars/9.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/cars/10.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/cars/2.jpg",
			},
		];
		return (
			<div className='container mt-5'>
				<CategorySlider data={carsFew} categoryName='Car Deals' />
			</div>
		);
	};

	const HousesForRent = () => {
		const houses = [
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/houses/1.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/houses/2.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/houses/3.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/houses/4.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/houses/5.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/houses/6.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/houses/7.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/houses/8.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/houses/9.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/houses/10.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/houses/1.jpg",
			},
		];
		return (
			<div className='container mt-5'>
				<CategorySlider data={houses} categoryName='Houses For Rent' />
			</div>
		);
	};

	const Furnitures = () => {
		const furnitures = [
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/furnitures/1.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/furnitures/2.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/furnitures/3.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/furnitures/4.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/furnitures/5.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/furnitures/6.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/furnitures/7.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/furnitures/8.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/furnitures/9.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/furnitures/10.jpg",
			},
			{
				name: "Vox wagen B345",
				price: "5,000,000 Rwf",
				url: "/assets/img/furnitures/1.jpg",
			},
		];
		return (
			<div className='container mt-5'>
				<CategorySlider data={furnitures} categoryName='Furnitures' />
			</div>
		);
	};

	return (
		<div className='body-container'>
			<Trending />
			<BrowseByCategory />
			<Brefing />
			<CarDeals />
			<HousesForRent />
			<Furnitures />
		</div>
	);
}

export default Body;
