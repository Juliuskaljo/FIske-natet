import { deleteCatches, getCatches, editCatches } from "../data/crud.js"
import { useStore } from '../data/store.js'
import { useState } from 'react'
// Import EditCatch component if used
// import EditCatch from './EditCatch.jsx'

const ViewCatch = ({ catches }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const setCatches = useStore(state => state.setCatches)

    const handleDelete = async () => {
        setIsLoading(true)
        await deleteCatches(catches.key)
        const catchesFromDb = await getCatches()
        setCatches(catchesFromDb)
        setIsLoading(false)
    }

    return (
        <section className="row border-bottom alternate">
            {isEditing ? (
                <>
                 <editCatches
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

