// import { useEffect, useState } from 'react';
// import { GetCatches } from '../data/crud.js';
// import { useStore } from '../data/store.js';

// const Catches = () => {
//     const { setCatches } = useStore(state => ({
//         setCatches: state.setCatches
//     }));

//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchCatches = async () => {
//             setIsLoading(true);
//             try {
//                 const catchesData = await GetCatches();
//                 setCatches(catchesData);
//             } catch (error) {
//                 console.error('Error fetching catches:', error);
//                 setError(error.message || 'An error occurred while fetching catches');
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchCatches();
//     }, [setCatches]);

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h2>Our Catches</h2>
//             {Catches.map(catchData => (
//                 <ViewCatch key={catchData.key} catchData={catchData} />
//             ))}
//         </div>
//     );
// };

// export { Catches };

import AddCatches from "../components/AddCatch.jsx"
import ViewCatch from "./ViewCatch.jsx";

const Catches = () => {
	return (
        <section>
		<div>
			<h1>Catches</h1>
            <AddCatches />
		</div>
        
        <div>
            <ViewCatch />
        </div>
        </section>
	)
}

export default Catches;