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
				<a><NavLink to="/Login">Login</NavLink></a>	
				<a><NavLink to="/Catches">Cathes</NavLink></a>	
				<a>	<NavLink to="/Weather">Weather</NavLink></a>	
				<a>	<NavLink to="/Feature">Feature</NavLink></a>	
				<div class="dot"></div>	
			</nav>
		</header>
		<main>
			<Outlet />
		</main>
	</div>
)

export default Root;