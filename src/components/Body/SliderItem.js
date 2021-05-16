import React from "react";
import "../../styles/sliderItem.scss";

const SliderItem = ({ item }) => {
	return (
		<div className='product-container shadow'>
			<div>
				<img src={item.url} alt={item.name} />
			</div>
			<div className='product-details'>
				<p>{item.name}</p>
				<span>{item.price}</span>
			</div>
		</div>
	);
};

export default SliderItem;
