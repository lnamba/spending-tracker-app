import { addDoc, collection, getDocs } from "firebase/firestore"; 
// import { getDocs } from "firebase/firestore";

import { db } from './index'

const createEntry = async ({ 
  itemName,
  dateCreated,
  userId, 
  entryDate,
  amount,
  category,
  note,
}) => {
  console.log('entry to add', {itemName,
    dateCreated,
    userId, 
    entryDate,
    amount,
    category,
    note,})
  try {
    const docRef = await addDoc(collection(db, 'entries'), {
      itemName,
      dateCreated: new Date(),
      userId: 'ab68f28guE15vwiqbBZ9', 
      entryDate: new Date(),
      amount: amount ? parseFloat(amount) : 0,
      category,
      note: note || '',
    });

    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error(`Error adding document: ${e}`);
  }
};

const listEntries = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'entries'));
    const entries = [];
     querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      entries.push(doc.data()) 
    });
    return entries;
  } catch (e) {
    console.error(`Error reading entries: ${e}`);
  }
}

export { createEntry, listEntries };