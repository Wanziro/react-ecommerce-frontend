import React, { useRef, useState } from "react";
import axios from "axios";

import { Button } from "@material-ui/core";
import { Search } from "@trejgun/material-ui-icons-google";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const usernameRef = useRef(null);
	const passwordRef = useRef(null);
	const confirmPasswordRef = useRef(null);

	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [usernameError, setUsernameError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	const registerUser = (e) => {
		e.preventDefault();
		if (name === "") {
			nameRef.current.focus();
			return setNameError("Enter your Name please!");
		} else setNameError("");

		if (email === "") {
			emailRef.current.focus();
			return setEmailError("Your Email address is requred");
		} else setEmailError("");

		if (username === "") {
			usernameRef.current.focus();
			return setUsernameError("username is required");
		} else setUsernameError("");

		if (password === "") {
			passwordRef.current.focus();
			return setPasswordError("Password is required");
		} else if (password.leng <= 4) {
			passwordRef.current.focus();
			return "Password must be greater than 4 characters";
		} else setPasswordError("");

		if (confirmPassword === "") {
			confirmPasswordRef.current.focus();
			return setConfirmPasswordError("Confirm your password please!");
		} else if (confirmPassword !== password) {
			confirmPasswordRef.current.focus();
			return setConfirmPasswordError("Passwords do not match");
		} else setConfirmPasswordError("");

		axios
			.post("http://localhost:8080/api/register", {
				name,
				email,
				username,
				password,
				confirmPassword,
			})
			.then((res) => {
				if (
					res.data === "Info provided is incorrect" ||
					res.data === "something went wrong, try again later"
				) {
					setName("");
					setEmail("");
					setUsername("");
					setPassword("");
					setConfirmPasswordError(res.data);
				}

				if (res.data === "Passwords do not match") {
					confirmPasswordRef.current.focus();
					setConfirmPasswordError(res.data);
				}

				if (res.data === "Email exists") {
					emailRef.current.focus();
					setPassword("");
					setConfirmPassword("");
					setEmailError("Email address already exists!");
				}

				if (res.data === "Username exists") {
					setPassword("");
					setConfirmPassword("");
					usernameRef.current.focus();
					setUsernameError("Username Already exists, try another one");
				}

				if (res.data === "success") {
					setName("");
					setEmail("");
					setUsername("");
					setPassword("");
					setConfirmPassword("");
					//redirect to dash board
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className='container'>
			<div className='login-container register'>
				<div className='login-form shadow'>
					<div className='header'>
						<span>AYC Logo</span>
						<h3>Register</h3>
					</div>
					<form onSubmit={registerUser}>
						<input
							type='text'
							title='Enter Your Name'
							onChange={(e) => setName(e.target.value)}
							placeholder='Name'
							ref={nameRef}
							value={name}
						/>
						<div className='message'>
							<small>{nameError}</small>
						</div>
						<input
							type='email'
							title='Enter Your Email'
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Email'
							ref={emailRef}
							value={email}
						/>
						<div className='message'>
							<small>{emailError}</small>
						</div>
						<input
							type='text'
							title='Enter Your Useraname'
							placeholder='username'
							onChange={(e) => setUsername(e.target.value)}
							ref={usernameRef}
							value={username}
						/>
						<div className='message'>
							<small>{usernameError}</small>
						</div>
						<input
							type='password'
							title='Type your Password'
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
							ref={passwordRef}
							value={password}
						/>
						<div className='message'>
							<small>{passwordError}</small>
						</div>
						<input
							type='password'
							title='Confirm Password'
							placeholder='Confirm Password'
							onChange={(e) => setConfirmPassword(e.target.value)}
							ref={confirmPasswordRef}
							value={confirmPassword}
						/>
						<div className='message'>
							<small>{confirmPasswordError}</small>
						</div>
						<Button type='submit'>Register</Button>
					</form>
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
