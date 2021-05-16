import React from "react";
import NavBar from "./components/NavBar/NavBar";
import WelcomeRow from "./components/WelcomeRow/WelcomeRow";
import AvailableProducts from "./components/AvailableProducts";

function App() {
	return (
		<>
			<NavBar />
			<div className='main-container'>
				<WelcomeRow />
				<AvailableProducts deviceType='desktop' />
			</div>
		</>
	);
}

export default App;
