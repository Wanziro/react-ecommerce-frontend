import React from "react";

import { Button } from "@material-ui/core";
import { Search } from "@trejgun/material-ui-icons-google";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

function Login() {
	return (
		<div className='container'>
			<div className='login-container'>
				<div className='login-form shadow'>
					<div className='header'>
						<span>AYC Logo</span>
						<h3>Login</h3>
					</div>
					<input type='text' placeholder='Username' />
					<input type='password' placeholder='Password' />
					<Button>Login</Button>
					<div class='text-center mt-2 mb-2'>OR</div>
					<Button className='google'>
						<Search />
						<div className='w-100'>Login With Google</div>
					</Button>
					<div class='text-center mt-2 mb-2'>
						<span>
							Don't an account? <Link to='/register'>Register</Link>
						</span>
						<p className='mb-1'>Forgot Password?</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
