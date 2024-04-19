// import { deleteCatch, GetCatches } from "../data/crud.js"
// import { useStore } from '../data/store.js'
// import { useState } from 'react'
// // Import EditCatch component if used
// // import EditCatch from './EditCatch.jsx'

// const viewCatch = ({ catchData }) => {
//     const [isLoading, setIsLoading] = useState(false)
//     const [isEditing, setIsEditing] = useState(false)
//     const setCatches = useStore(state => state.setCatches)

//     const handleDelete = async () => {
//         setIsLoading(true)
//         await deleteCatch(catchData.key)
//         const catchesFromDb = await GetCatches()
//         setCatches(catchesFromDb)
//         setIsLoading(false)
//     }

//     return (
//         <section className="row border-bottom alternate">
//             {isEditing ? (
//                 // Render EditCatch component if defined
//                 // <EditCatch
//                 //     catchData={catchData}
//                 //     whenEditDone={() => setIsEditing(false)} />
//                 <>
//                     {/* Render Edit Form or Fields here */}
//                     {/* Example: */}
//                     <div>Edit Form/Fields</div>
//                     <button onClick={() => setIsEditing(false)}>Done Editing</button>
//                 </>
//             ) : (
//                 <>
//                     <div className="flex-grow">{catchData.name} {catchData.date}.</div>
//                     <button onClick={() => setIsEditing(true)}>🖊️</button>
//                     <button disabled={isLoading} onClick={handleDelete}>Fire</button>
//                 </>
//             )}
//         </section>
//     )
// }

// export default viewCatch

