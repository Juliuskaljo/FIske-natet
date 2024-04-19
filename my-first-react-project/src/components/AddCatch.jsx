// import { useState } from 'react'
// import { useStore } from '../data/store.js'
// import { AddCatch, GetCatches } from '../data/crud.js'

// const AddCatch = () => {
// 	const [isLoading, setIsLoading] = useState(false)
// 	const [name, setName] = useState('')
// 	const [length, setLength] = useState('')
// 	const setCatches = useStore(state => state.setCatches)

// 	const handleSubmit = async (event) => {
// 		// skapa ett objekt för ny employee
// 		// lägg till i databasen
// 		// hämta listan med anställda igen

// 		setIsLoading(true)
// 		event.preventDefault()
// 		const newCatch = { name: name, length: length }
// 		// TODO: meddela användaren att vi väntar på databasen - visa spinner t.ex.
// 		try {
// 			await AddCatch(newCatch)
// 			setName('')
// 			setLength('')
// 			setCatches(await GetCatches())
// 		} catch {
// 			// TODO: visa felmeddelande för användaren

// 		} finally {
// 			setIsLoading(false)
// 		}
// 	}

// 	return (
// 		<section>
// 			<form className="form">
// 			<h3> Ny fisk</h3>
// 			<section className="column">
// 				<label> Name </label>
// 				<input type="text"
// 					value={name}
// 					onChange={e => setName(e.target.value)}
// 					/>
// 			</section>

// 			<section className="column">
// 				<label> Occupation </label>
// 				<input type="text"
// 					value={length}
// 					onChange={e => setLength(e.target.value)}
// 					/>
// 			</section>

// 			<button
// 				disabled={isLoading}
// 				onClick={handleSubmit} type="submit"> Register </button>
// 			</form>
// 		</section>
// 	)
// }

// export default AddCatch