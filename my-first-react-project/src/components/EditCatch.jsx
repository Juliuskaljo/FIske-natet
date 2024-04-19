// import { useState } from 'react'
// import { editCatch, GetCatches } from '../data/crud.js'
// import { useStore } from '../data/store.js'

// const editCatch = ({ catchData, whenEditDone }) => {
//     const [disableButton, setDisableButton] = useState(false)
//     const [name, setName] = useState(catchData.name)
//     const [length, setLength] = useState(catchData.length)
//     const setCatches = useStore(state => state.setCatches)

//     const handleSave = async () => {
//         setDisableButton(true)
//         const updatedCatch = { name, length }
//         await editCatch(catchData.key, updatedCatch)
//         const updatedList = await GetCatches()
//         setCatches(updatedList)
//         whenEditDone()
//     }

//     return (
//         <>
//             <section className="change-info">
//                 <section className="name-change">
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={e => setName(e.target.value)}
//                     />
//                 </section>
//                 <section className="length-change">
//                     <label>Length</label>
//                     <input
//                         type="text"
//                         value={length}
//                         onChange={e => setLength(e.target.value)}
//                     />
//                 </section>
//             </section>
//             <button disabled={disableButton} onClick={handleSave}>Save</button>
//         </>
//     )
// }

// export default editCatch
