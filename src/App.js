import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./Home";

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/home' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
			</Switch>
		</Router>
	);
}

export default App;
