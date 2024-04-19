import { createHashRouter } from "react-router-dom";
import Root from "./Root.jsx";
import Auth from "../login/Login.jsx";
import Catches from "../components/Catches.jsx";
import Weather from "../components/Weather.jsx";
import Feature from "../components/Feature.jsx";


const router = createHashRouter([
	{
		path: "/",

		element: <Root/>,

		children: [
			
			{
				path: "/Login",
				element: <Auth/>
			},
			
			{
				path: "/Catches",
				element: <Catches/>
			},

			{
				path: "/Weather",
				element: <Weather/>
			},

			{
				path: "/Feature",
				element: <Feature/>
			}

		]
	}
]);

export { router }