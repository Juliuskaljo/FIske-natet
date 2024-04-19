import { useState } from 'react';
import { getCatches, updateCatches } from '../data/crud.js'; // Correct import
import { useStore } from '../data/store.js';

const EditCatches = ({ catches, whenEditDone }) => {
    const [disableButton, setDisableButton] = useState(false);
    const [name, setName] = useState(catches.name);
    const [length, setLength] = useState(catches.length);
    const setCatches = useStore(state => state.setCatches);

    const handleSave = async () => {
        setDisableButton(true);
        const updatedCatches = { name, length };
        await updateCatches(catches.key, updatedCatches); // Correct function call
        const updatedList = await getCatches();
        setCatches(updatedList);
        whenEditDone();
    };

    return (
        <>
            <section className="change-info">
                <section className="name-change">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </section>
                <section className="length-change">
                    <label>Length</label>
                    <input
                        type="text"
                        value={length}
                        onChange={e => setLength(e.target.value)}
                    />
                </section>
            </section>
            <button disabled={disableButton} onClick={handleSave}>Save</button>
        </>
    );
};

export default EditCatches 
