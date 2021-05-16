import React from "react";
import "../../styles/menu.scss";

function Menu() {
	return (
		<div className='menu-container'>
			<ul>
				<li>
					<div class='dropdown'>
						<span class='dropbtn'>Cars & Vehicles</span>
						<div class='dropdown-content'>
							<a href='/'>Lost & Found Stuff</a>
							<a href='/'>Music, Bands & Musicians</a>
							<a href='/'>Rideshare & Car Pooling</a>
							<a href='/'>Skills & Language Swap</a>
							<a href='/'>Sports Teams & Partners</a>
							<a href='/'>Travel & Travel Partners</a>
						</div>
					</div>
				</li>
				<li>
					<div class='dropdown'>
						<span class='dropbtn'>For Sale</span>
						<div class='dropdown-content'>
							<a href='/'>Artists & Theatres</a>
							<a href='/'>Classes</a>
							<a href='/'>Events, Gigs & Nightlife</a>
							<a href='/'>Travel & Travel Partners</a>
						</div>
					</div>
				</li>
				<li>
					<div class='dropdown'>
						<span class='dropbtn'>Property</span>
						<div class='dropdown-content'>
							<a href='/'>Artists & Theatres</a>
							<a href='/'>Classes</a>
							<a href='/'>Events, Gigs & Nightlife</a>
							<a href='/'>Groups & Associations</a>
							<a href='/'>Lost & Found Stuff</a>
							<a href='/'>Music, Bands & Musicians</a>
							<a href='/'>Rideshare & Car Pooling</a>
						</div>
					</div>
				</li>
				<li>
					<div class='dropdown'>
						<span class='dropbtn'>Jobs</span>
						<div class='dropdown-content'>
							<a href='/'>Artists & Theatres</a>
							<a href='/'>Classes</a>
							<a href='/'>Events, Gigs & Nightlife</a>
							<a href='/'>Groups & Associations</a>
							<a href='/'>Music, Bands & Musicians</a>
							<a href='/'>Rideshare & Car Pooling</a>
							<a href='/'>Travel & Travel Partners</a>
						</div>
					</div>
				</li>
				<li>
					<div class='dropdown'>
						<span class='dropbtn'>Services</span>
						<div class='dropdown-content'>
							<a href='/'>Artists & Theatres</a>
							<a href='/'>Classes</a>
							<a href='/'>Events, Gigs & Nightlife</a>
							<a href='/'>Skills & Language Swap</a>
							<a href='/'>Sports Teams & Partners</a>
							<a href='/'>Travel & Travel Partners</a>
						</div>
					</div>
				</li>
				<li>
					<div class='dropdown'>
						<span class='dropbtn'>Community</span>
						<div class='dropdown-content'>
							<a href='/'>Artists & Theatres</a>
							<a href='/'>Groups & Associations</a>
							<a href='/'>Lost & Found Stuff</a>
							<a href='/'>Music, Bands & Musicians</a>
							<a href='/'>Rideshare & Car Pooling</a>
							<a href='/'>Skills & Language Swap</a>
							<a href='/'>Sports Teams & Partners</a>
							<a href='/'>Travel & Travel Partners</a>
						</div>
					</div>
				</li>
				<li>
					<div class='dropdown'>
						<span class='dropbtn'>Pets</span>
						<div class='dropdown-content'>
							<a href='/'>Artists & Theatres</a>
							<a href='/'>Classes</a>
							<a href='/'>Events, Gigs & Nightlife</a>
							<a href='/'>Groups & Associations</a>
							<a href='/'>Skills & Language Swap</a>
							<a href='/'>Sports Teams & Partners</a>
							<a href='/'>Travel & Travel Partners</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
