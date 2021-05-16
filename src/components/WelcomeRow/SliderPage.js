import React from "react";
import Carousel from "react-bootstrap/Carousel";

function SliderPage() {
	return (
		<div>
			<div className='container-fluid'>
				<Carousel
					interval={3000}
					keyboard={false}
					pauseonhover='true'
					fade={true}
				>
					<Carousel.Item style={{ height: "300px" }}>
						<img
							style={{ height: "300px" }}
							className='d-block w-100'
							src={"assets/img/slide1.jpg"}
							alt='slide'
						/>

						<Carousel.Caption>
							<h3>First Slide </h3>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item style={{ height: "300px" }}>
						<img
							style={{ height: "300px" }}
							className='d-block w-100'
							src={"assets/img/slide2.jpg"}
							alt='slide'
						/>

						<Carousel.Caption>
							<h3>Second Slide</h3>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item style={{ height: "300px" }}>
						<img
							style={{ height: "300px" }}
							className='d-block w-100'
							src={"assets/img/slide3.jpg"}
							alt='slide'
						/>

						<Carousel.Caption>
							<h3>Third Slide</h3>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</div>
	);
}

export default SliderPage;
