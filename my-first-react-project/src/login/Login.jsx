import { useState } from "react";
import { auth } from "../data/fire";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import '../Login.css'


const Auth = () => {

		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');

		// console.log(auth?.currentUser?.email)

	const signIn = async () => {
		try {
		await createUserWithEmailAndPassword(auth, email, password);
		// console.log(auth?.currentUser?.email)
	} catch (error) {
		console.error(error);	
		}
	}

	const logOut = async () => {
		try {
		await signOut(auth);
	} catch (error) {
		console.error(error);	
		}
	}


		return (
			<div>
			  <h1>Login</h1>
			  <div className="Login-container">
				<div className="login-box">
				  <p className="username">Username</p>
				  <input
					className="loginEmail"
					placeholder="Example@mail.com"
					onChange={(e) => setEmail(e.target.value)}
				  />
				</div>
				<div className="password-box">
				  <p className="password">Password</p>
				  <input
					className="loginPassword"
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				  />
				</div>
				<p className="forgot-password">Forgot password?</p>
				<button className="Login-btn" onClick={() => signIn(email, password)}>
				  Login
				</button>
				<button className="Logout-btn" onClick={logOut}>
				  Logout
				</button>
			  </div>
			</div>
		  );
		};
export default Auth;