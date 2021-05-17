import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menus/Menu";
import Body from "./components/Body/Body";
import Footer from "./components/Footer";

function Home() {
	return (
		<>
			<NavBar />
			<div className='main-container'>
				<Menu />
				<Body />
			</div>
			<Footer />
		</>
	);
}

export default Home;
