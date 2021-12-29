import { collection } from 'firebase/firestore'; 

import { db } from 'index.js'

const createUser = async ({ firstName, lastName, emailAddress }) => {
  try {
    const docRef = await addDoc.collection.add({
      firstName,
      lastName,
      emailAddress,
    });
      
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export { createUser };