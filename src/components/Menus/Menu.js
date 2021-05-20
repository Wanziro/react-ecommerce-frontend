import React from "react";
import "../../styles/menu.scss";

function Menu() {
	return (
		<div className='menu-container'>
			<ul>
				<li>
					<div className='dropdown'>
						<span className='dropbtn'>Cars & Vehicles</span>
						<div className='dropdown-content'>
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
					<div className='dropdown'>
						<span className='dropbtn'>For Sale</span>
						<div className='dropdown-content'>
							<a href='/'>Artists & Theatres</a>
							<a href='/'>Classes</a>
							<a href='/'>Events, Gigs & Nightlife</a>
							<a href='/'>Travel & Travel Partners</a>
						</div>
					</div>
				</li>
				<li>
					<div className='dropdown'>
						<span className='dropbtn'>Property</span>
						<div className='dropdown-content'>
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
					<div className='dropdown'>
						<span className='dropbtn'>Jobs</span>
						<div className='dropdown-content'>
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
					<div className='dropdown'>
						<span className='dropbtn'>Services</span>
						<div className='dropdown-content'>
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
					<div className='dropdown'>
						<span className='dropbtn'>Community</span>
						<div className='dropdown-content'>
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
					<div className='dropdown'>
						<span className='dropbtn'>Pets</span>
						<div className='dropdown-content'>
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
