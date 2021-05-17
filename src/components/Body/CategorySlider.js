import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderItem from "./SliderItem";
import ArrowDownIcon from "@material-ui/icons/ExpandMore";

const responsive = {
	desktop: {
		breakpoint: {
			max: 3000,
			min: 1024,
		},
		items: 5,
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

const CategorySlider = ({ data, categoryName }) => {
	return (
		<>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<h3 style={{ color: "#000", fontWeight: "500" }}>{categoryName}</h3>
				</div>
				<div>
					<a href='/'>
						View More <ArrowDownIcon />
					</a>
				</div>
			</div>
			<Carousel
				additionalTransfrom={0}
				arrows={true}
				autoPlay={false}
				autoPlaySpeed={2000}
				centerMode={false}
				className=''
				containerClass='container-with-dots'
				dotListClass=''
				draggable={true}
				ssr={true} // means to render carousel on server-side.
				focusOnSelect={false}
				infinite={false}
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
				{data.map((item) => (
					<SliderItem item={item} />
				))}
			</Carousel>
		</>
	);
};
export default CategorySlider;
