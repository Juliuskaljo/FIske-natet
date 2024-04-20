import { useState } from 'react'
import { useStore } from '../data/store.js'
import { addCatches, getCatches } from '../data/crud.js'
import { updateCatches } from '../data/crud.js' // Correct import

const AddCatches = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [name, setName] = useState('')
	const [length, setLength] = useState('')
    const [date, setDate] = useState('')
    const [species, setSpecies] = useState('')
    const [weight, setWeight] = useState('')
	const setCatches = useStore(state => state.setCatches)

	const handleSubmit = async (event) => {
		setIsLoading(true);
		event.preventDefault();
        const newCatches = {
            name: name,
            length: length,
            date: date,
            species: species,
            weight: weight
        };
		// TODO: meddela användaren att vi väntar på databasen - visa spinner t.ex.
		try {
			await addCatches(newCatches)
			setName('');
			setLength('');
            setDate('');
            setSpecies('');
            setWeight('');

			setCatches(await getCatches());
		} catch {
			// TODO: visa felmeddelande för användaren

		} finally {
			setIsLoading(false);
		}
	}

	return (
		<section>
			<form className="form">
			<h3> Register New Catch!</h3>
			<section className="column">
				<label> Name </label>
				<input type="text"
					value={name}
					onChange={e => setName(e.target.value)}
					/>
			</section>

			<section className="column">
				<label> Length </label>
				<input type="number"
					value={length}
					onChange={e => setLength(e.target.value)}
					/>
			</section>

            <section className="column">
				<label> Date </label>
				<input type="string"
					value={date}
					onChange={e => setDate(e.target.value)}
					/>
			</section>

            <section className="column">
				<label> Species </label>
				<input type="text"
					value={species}
					onChange={e => setSpecies(e.target.value)}
					/>
			</section>

            <section className="column">
				<label> Weight </label>
				<input type="number"
					value={weight}
					onChange={e => setWeight(e.target.value)}
					/>
			</section>
				<div className='button-div'>
					<button className='register-catch-btn'
					disabled={isLoading}
					onClick={handleSubmit} type="submit"> Register </button>
				</div>
			</form>
		</section>
	)
}

export default AddCatches