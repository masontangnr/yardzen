import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7NUVfrImccSo8FuCBG7bXVk0oLFqgE-k",
  authDomain: "yardzen-demo.firebaseapp.com",
  databaseURL: "https://yardzen-demo.firebaseio.com",
  projectId: "yardzen-demo",
  storageBucket: "yardzen-demo.appspot.com",
  messagingSenderId: "509183652730",
  appId: "1:509183652730:web:ba2208f7d8e0882f009cc3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// Get a list of cities from your database
export const getItems = async (db, setItem) => {
  const itemsCol = collection(db, 'items');
  const itemSnapshot = await getDocs(itemsCol);
  const itemList = itemSnapshot.docs.map(doc => doc.data());
  setItem(itemList)
  return itemList;
}
