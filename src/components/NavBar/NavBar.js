import React from "react";

import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PhoneIcon from "@material-ui/icons/Phone";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartTwoTone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccessoriesIcon from "@material-ui/icons/AcUnit";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import ComputerIcon from "@material-ui/icons/ImportantDevicesRounded";
import CarIcon from "@material-ui/icons/AirportShuttle";
import HealthAndBeautyIcon from "@material-ui/icons/LocalFlorist";
import WommenClothesIcon from "@material-ui/icons/LocalMall";
import WommenShoesIcon from "@material-ui/icons/LocalOffer";
import FoodIcon from "@material-ui/icons/ColorLens";
import TechnologyIcon from "@material-ui/icons/Public";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import HelpIcon from "@material-ui/icons/ContactSupport";

import "../../styles/navBar.scss";

function NavBar() {
	// functional componet
	const NavRightSide = () => {
		return (
			<div className='navbar-right-side'>
				<div>
					<AccountCircleIcon size='large' />
					<span>Login</span>
				</div>
				<div>
					<ShoppingCartIcon size='large' />
					<span>My cart</span>
				</div>
			</div>
		);
	};

	const NavBarCategories = () => {
		return (
			<div className='nav-categories'>
				<ul>
					<li>
						<AccessoriesIcon /> Accessories
					</li>
					<li>
						<ComputerIcon /> Computers
					</li>
					<li>
						<PhoneIphoneIcon />
						Phones
					</li>
					<li>
						<CarIcon /> Cars
					</li>
					<li>
						<HealthAndBeautyIcon /> Health & beauty
					</li>
					<li>
						<WommenShoesIcon />
						Shoes
					</li>
					<li>
						<WommenClothesIcon />
						Clothes
					</li>
					<li>
						<FoodIcon /> Food
					</li>
					<li>
						<TechnologyIcon /> Technology
					</li>
					<li>
						<CameraIcon />
						Cameras
					</li>
					<li>
						<HelpIcon />
						Help
					</li>
				</ul>
			</div>
		);
	};

	return (
		<nav className='navbar p-0'>
			<div className='sub-header-nav'>
				<ul>
					<li>Help?</li>
					<li>About us</li>
					<li>
						<PhoneIcon /> 0783453453 | 078231231
					</li>
				</ul>
			</div>
			<div className='nav-contents'>
				<div>AYC logo</div>
				<div className='search-bar'>
					<select>
						<option value='all'>All categories</option>
						<option value='computer and electronics'>
							computer and electronics
						</option>
						<option value='coesmetics'>coesmetics</option>
						<option value='shoes'>shoes</option>
						<option value='food'>food</option>
						<option value='cars'>cars</option>
					</select>
					<input type='text' placeholder='Search for products' />
					<Button title='Search'>
						<SearchIcon />
					</Button>
				</div>

				<NavRightSide />
			</div>
			<NavBarCategories />
		</nav>
	);
}

export default NavBar;
