import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { db } from './fire.js';

const collectionName = 'catches';
const collectionRef = collection(db, collectionName);

async function GetCatches() {
    const catchCollection = collection(db, collectionName);
    const catchSnapshot = await getDocs(catchCollection);
    const catchList = catchSnapshot.docs.map(doc => withKey(doc));
    return catchList;
}

function withKey(doc) {
    let o = doc.data();
    o.key = doc.id;
    return o;
}

async function AddCatch(catchData) {
    await addDoc(collectionRef, catchData);
}

async function deleteCatch(key) {
    const docRef = doc(collectionRef, key);
    await deleteDoc(docRef);
}

async function editCatch(key, updatedCatch) {
    const docRef = doc(collectionRef, key);
    await updateDoc(docRef, updatedCatch);
}

export { GetCatches, AddCatch, deleteCatch, editCatch };

