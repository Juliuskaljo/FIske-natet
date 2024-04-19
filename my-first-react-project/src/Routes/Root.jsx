import { Link, NavLink, Outlet } from "react-router-dom";

const Root = () => (
	<div className="app">
		<header>
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
