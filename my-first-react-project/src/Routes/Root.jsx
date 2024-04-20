import { Link, NavLink, Outlet } from "react-router-dom";
import Auth from "../login/Login.jsx";
import Login from "../login/Login.jsx";
import Catches from "../components/Catches.jsx";
import Weather from "../components/Weather.jsx";
import Feature from "../components/Feature.jsx";

const Root = () => (
	<div className="app">
		<header>
			<nav className="navMenu">
				<NavLink to="/Login" className="nav-login">Login</NavLink>
				<NavLink to="/Catches" className="nav-login">Catches</NavLink>	
				<NavLink to="/Weather" className="nav-login">Weather</NavLink>	
				<NavLink to="/Feature" className="nav-login">Feature</NavLink>	
			</nav>
		</header>
		<main>
			<Outlet />
		</main>
	</div>
)

export default Root;