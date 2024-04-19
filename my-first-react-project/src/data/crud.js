import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { db } from './fire.js';

const collectionName = 'catches';
const collectionRef = collection(db, collectionName);

async function getCatches() {
    const catchesCollection = collection(db, collectionName);
    const catchesSnapshot = await getDocs(catchesCollection);
    const catchesList = catchesSnapshot.docs.map(doc => withKey(doc));
    return catchesList;
}

function withKey(doc) {
    let o = doc.data();
    o.key = doc.id;
    return o;
}

async function addCatches(catches) {
    await addDoc(collectionRef, catches);
}

async function deleteCatches(key) {
    const docRef = doc(collectionRef, key);
    await deleteDoc(docRef);
}

async function editCatches(key, updatedCatches) {
    const docRef = doc(collectionRef, key);
    await updateDoc(docRef, updatedCatches);
}

export { getCatches, addCatches, deleteCatches, editCatches };

