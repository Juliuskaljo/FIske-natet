import { useState } from "react";
import { auth } from "../data/fire";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";


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
			<input placeholder="Example@mail.com" onChange={(e) => setEmail(e.target.value)}/>
			
			<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
			<button onClick={signIn}> Logga in </button>

			<button onClick={logOut}> Logga ut </button>
		</div>
	)
}

export default Auth;