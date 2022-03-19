import React, { useState, useEffect } from "react";
import "./App.css";
import {getItems, db} from './firebase'



function App() {

	const [item, setItem] = useState([]);

  useEffect(() => {
    getItems(db, setItem)
  }, [])

  console.log(item)

	return (
		<div className='App'>
      <h1>Please enter a budget for your project</h1>
      <input type="text" />
		</div>
	);
}

export default App;
