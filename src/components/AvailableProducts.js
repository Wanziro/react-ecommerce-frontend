import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/availableProducts.scss";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
		slidesToSlide: 4, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const AvailableProducts = (props) => {
	return (
		<div className='main'>
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={false}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={props.deviceType !== "mobile" ? true : false}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition='all .5'
				transitionDuration={500}
				containerClass='carousel-container'
				removeArrowOnDeviceType={["tablet", "mobile"]}
				deviceType={props.deviceType}
				dotListClass='custom-dot-list-style'
				itemClass='carousel-item-padding-40-px'
			>
				<div className='product-container'>
					<div>
						<img src='/assets/img/products/4.png' alt='' />
					</div>
					<div className='w-100'>
						<p>Product name</p>
						<button>Available</button>
					</div>
				</div>
				<div className='product-container'>
					<div>
						<img src='/assets/img/products/5.png' alt='' />
					</div>
					<div className='w-100'>
						<p>Product name</p>
						<button>Available</button>
					</div>
				</div>
				<div className='product-container'>
					<div>
						<img src='/assets/img/products/6.png' alt='' />
					</div>
					<div className='w-100'>
						<p>Product name</p>
						<button>Available</button>
					</div>
				</div>
				<div className='product-container'>
					<div>
						<img src='/assets/img/products/7.png' alt='' />
					</div>
					<div className='w-100'>
						<p>Product name</p>
						<button>Available</button>
					</div>
				</div>
				<div className='product-container'>
					<div>
						<img src='/assets/img/products/8.png' alt='' />
					</div>
					<div className='w-100'>
						<p>Product name</p>
						<button>Available</button>
					</div>
				</div>
				<div className='product-container'>
					<div>
						<img src='/assets/img/products/9.png' alt='' />
					</div>
					<div className='w-100'>
						<p>Product name</p>
						<button>Available</button>
					</div>
				</div>
				<div className='product-container'>
					<div>
						<img src='/assets/img/products/10.png' alt='' />
					</div>
					<div className='w-100'>
						<p>Product name</p>
						<button>Available</button>
					</div>
				</div>
				<div className='product-container'>
					<div>
						<img src='/assets/img/products/11.png' alt='' />
					</div>
					<div className='w-100'>
						<p>Product name</p>
						<button>Available</button>
					</div>
				</div>
				<div className='product-container'>
					<div>
						<img src='/assets/img/products/12.png' alt='' />
					</div>
					<div className='w-100'>
						<p>Product name</p>
						<button>Available</button>
					</div>
				</div>
				<div className='product-container'>
					<div>
						<img src='/assets/img/products/13.png' alt='' />
					</div>
					<div className='w-100'>
						<p>Product name</p>
						<button>Available</button>
					</div>
				</div>
			</Carousel>
			;
		</div>
	);
};

export default AvailableProducts;
