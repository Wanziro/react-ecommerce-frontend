const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

const db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "",
	database: "ayc",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("AYC Backend");
});

app.post("/api/register", async (req, res) => {
	const names = req.body.name;
	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;
	const confirmPassword = req.body.confirmPassword;
	const date = new Date();

	const salt = await bcrypt.genSalt(10);
	const securePassword = await bcrypt.hash(password, salt);

	//server side varidation
	if (
		names === "" ||
		email === "" ||
		username === "" ||
		password === "" ||
		confirmPassword == ""
	) {
		const dt = "Info provided is incorrect";
		res.send(dt);
		res.end(dt);
	} else if (password !== confirmPassword) {
		const dt = "Passwords do not match";
		res.send(dt);
		res.end(dt);
	}

	//lets start by checking if email or username exists
	db.query("select * from users", (err, result) => {
		if (err) {
			const dt = "something went wrong, try again later";
			res.send(dt);
			res.end(dt);
		} else {
			result.forEach((user) => {
				if (user.email === email) {
					const dt = "Email exists";
					res.send(dt);
					res.end(dt);
				} else if (user.username === username) {
					const dt = "Username exists";
					res.send(dt);
					res.end(dt);
				}
			});

			//save user info
			const q =
				"insert into users(names,email,username,password,date) values(?,?,?,?,?)";
			db.query(
				q,
				[names, email, username, securePassword, date],
				(err2, result2) => {
					if (err2) {
						console.log(err2);
					} else {
						res.send({
							message: "success",
						});
						res.end();
					}
				}
			);
		} //fetching data
	});
});

app.listen(process.env.PORT || 8080, () => {
	console.log("server started on port 8080");
});
