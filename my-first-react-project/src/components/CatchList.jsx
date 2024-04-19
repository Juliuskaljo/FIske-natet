import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../data/fire.js'; // Import your Firebase configuration

const CatchList = () => {
  const [catches, setCatches] = useState([]);

  useEffect(() => {
    const fetchCatches = async () => {
      const catchesCollection = collection(db, 'catches');
      const snapshot = await getDocs(catchesCollection);
      const catchData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCatches(catchData);
    };

    fetchCatches();
  }, []);

  return (
    <div>
      <h2>Catch List</h2>
      <ul>
        {catches.map(catchData => (
          <li key={catchData.id}>
            <strong>Name:</strong> {catchData.name}, <strong>Species:</strong> {catchData.species}, <strong>Length:</strong> {catchData.length}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatchList;
