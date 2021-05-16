import React from "react";

import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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
					<PersonAddIcon size='large' />
					<span>Register</span>
				</div>
				<div>
					<Button>
						<PostAddIcon size='large' />
						post free ad
					</Button>
				</div>
			</div>
		);
	};

	return (
		<nav className='navbar p-0'>
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
					<input type='text' placeholder='What are you looking for?' />
					<Button title='Search'>
						<SearchIcon />
					</Button>
				</div>
				<NavRightSide />
			</div>
		</nav>
	);
}

export default NavBar;
