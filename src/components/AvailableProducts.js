import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/availableProducts.scss";

const responsive = {
	desktop: {
		breakpoint: {
			max: 3000,
			min: 1024,
		},
		items: 3,
		partialVisibilityGutter: 40,
	},
	mobile: {
		breakpoint: {
			max: 464,
			min: 0,
		},
		items: 1,
		partialVisibilityGutter: 30,
	},
	tablet: {
		breakpoint: {
			max: 1024,
			min: 464,
		},
		items: 2,
		partialVisibilityGutter: 30,
	},
	// desktop: {
	// 	breakpoint: { max: 3000, min: 1024 },
	// 	items: 4,
	// 	slidesToSlide: 4, // optional, default to 1.
	// },
	// tablet: {
	// 	breakpoint: { max: 1024, min: 464 },
	// 	items: 2,
	// 	slidesToSlide: 2, // optional, default to 1.
	// },
	// mobile: {
	// 	breakpoint: { max: 464, min: 0 },
	// 	items: 1,
	// 	slidesToSlide: 1, // optional, default to 1.
	// },
};

const AvailableProducts = () => {
	return (
		<div className='main'>
			<Carousel
				additionalTransfrom={0}
				arrows={true}
				autoPlay={true}
				autoPlaySpeed={2000}
				centerMode={false}
				className=''
				containerClass='container-with-dots'
				dotListClass=''
				draggable={true}
				ssr={true} // means to render carousel on server-side.
				focusOnSelect={false}
				infinite={true}
				itemClass=''
				keyBoardControl={true}
				minimumTouchDrag={80}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={responsive}
				showDots={false}
				sliderClass=''
				slidesToSlide={2}
				swipeable={true}
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
