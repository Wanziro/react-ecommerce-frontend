import React from "react";

import { Button } from "@material-ui/core";
import { Search } from "@trejgun/material-ui-icons-google";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

function Register() {
	return (
		<div className='container'>
			<div className='login-container'>
				<div className='login-form shadow'>
					<div className='header'>
						<span>AYC Logo</span>
						<h3>Register</h3>
					</div>
					<input type='text' placeholder='Name' />
					<input type='email' placeholder='Email' />
					<input type='text' placeholder='Username' />
					<input type='password' placeholder='Password' />
					<Button>Login</Button>
					<div className='text-center mt-2 mb-2'>OR</div>
					<Button className='google'>
						<Search />
						<div className='w-100'>Login With Google</div>
					</Button>
					<div className='text-center mt-2 mb-2'>
						<span>
							Already have an account? <Link to='/login'>Login</Link>
						</span>
						<p className='mb-1'>Forgot Password?</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
