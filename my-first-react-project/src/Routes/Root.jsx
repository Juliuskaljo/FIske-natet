import { Link, NavLink, Outlet } from "react-router-dom";
import Auth from "../login/Login.jsx";
const Root = () => (
	<div className="app">
		<header>
			<h1>Fiskenätet</h1>
			<Auth/>
			<nav className="nav-meny">
				<ul>
					<ol>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/Find">Find</NavLink>
						<NavLink to="/about">About
						</NavLink>
						<NavLink to="/contact">Contact</NavLink>
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
