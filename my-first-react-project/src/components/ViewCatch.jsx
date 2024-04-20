import { deleteCatches, getCatches } from "../data/crud.js";
import EditCatches from '../components/EditCatch.jsx';
import { useStore } from '../data/store.js';
import { useState } from 'react';

const ViewCatch = ({ catchData }) => { // Changed parameter name to catchData
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const setCatches = useStore(state => state.setCatches);

    const handleDelete = async () => {
        if (catchData && catchData.id) { // Changed from catches to catchData
            setIsLoading(true);
            await deleteCatches(catchData.id); // Changed from catches to catchData
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
                        catches={catchData} // Changed from catches to catchData
                        whenEditDone={() => setIsEditing(false)} />
                    <div>Edit Form/Fields</div>
                    <button onClick={() => setIsEditing(false)}>Done Editing</button>
                </>
            ) : (
                
                    <div className="catchContainer">
                    <div className="left-side">
                      Name:  {catchData.name} <br></br>
                      Date:  {catchData.datum}   
                     </div>
                     <div className="middle">
                      Weight:  {catchData.weight} 
                      </div>
                      <div className="right-side">
                      Species:  {catchData.species} <br></br>
                      Length:  {catchData.length} 
                      </div>
                      <div className="editDeleteButtons">
                      <button onClick={() => setIsEditing(true)}>🖊️</button>
                    <button disabled={isLoading} onClick={handleDelete}>🗑️</button>
                    </div>
                        </div> 
                    
                
            )}
        </section>
    )
}

export default ViewCatch;
