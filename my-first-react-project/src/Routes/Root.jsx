import { Link, NavLink, Outlet } from "react-router-dom";
import Auth from "../login/Login.jsx";
import Login from "../login/Login.jsx";
import Catches from "../components/Catches.jsx";
import Weather from "../components/Weather.jsx";
import Feature from "../components/Feature.jsx";

const Root = () => (
	<div className="app">
		<header>
			<nav className="nav-meny">
				<ul>
					<ol>
						<NavLink to="/Login">Login</NavLink>
						<NavLink to="/Catches">Cathes</NavLink>
						<NavLink to="/Weather">Weather</NavLink>
						<NavLink to="/Feature">Feature</NavLink>

					</ol>	
				</ul>
			</nav>
		</header>
		<main>
			<Outlet />
		</main>
	</div>
)

export default Root;