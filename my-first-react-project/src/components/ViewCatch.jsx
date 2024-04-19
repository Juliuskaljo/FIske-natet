import { deleteCatches, getCatches } from "../data/crud.js"
import { useStore } from '../data/store.js'
import EditCatches from '../components/EditCatch.jsx'
import { useState } from 'react'
import { updateCatches } from '../data/crud.js' // Correct import
import { db } from '../data/fire.js'
// Import EditCatch component if used
// import EditCatch from './EditCatch.jsx'

const ViewCatch = ({ catches }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const setCatches = useStore(state => state.setCatches)

    const handleDelete = async () => {
        if (catches && catches.key) {
            setIsLoading(true);
            await deleteCatches(catches.key);
            const catchesFromDb = await getCatches();
            setCatches(catchesFromDb);
            setIsLoading(false);
        }
    }

    return (
        <section className="row border-bottom alternate">
            {isEditing ? (
                <>
                 <EditCatches
                     catches={catches}
                    whenEditDone={() => setIsEditing(false)} />
                   
                    <div>Edit Form/Fields</div>
                    <button onClick={() => setIsEditing(false)}>Done Editing</button>
                    </>
            ) : (
                <>
                    <div className="flex-grow">{catches.name} and {catches.length} </div>

                    <button onClick={() => setIsEditing(true)}>🖊️</button>
                    <button disabled={isLoading} onClick={handleDelete}>Fire</button>
                    </>
            )}
        </section>
    )
}

export default ViewCatch

