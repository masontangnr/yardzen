import React, { useState, useEffect } from "react";
import "./App.css";
import { getItems, db } from "./firebase";

function App() {
	const [items, setItems] = useState([]);
  let [lowPrice, setLowPrice] = useState(0);
  let [highPrice, setHighPrice] = useState(0);

	useEffect(() => {
		getItems(db, setItems);
	}, []);

  const handleChange=(e)=>{
       setLowPrice( lowPrice += e.target.value);    
  }
console.log(items)
	const displayWaterFeatures = () => {
		return items.map(
			(item, key) =>
				item.type === "WATER_FEATURES" && (
					<>
          
            <input type="radio" value={item.lowPrice} id={item.type}
               onChange={handleChange} name={item.type} />
             <label for={item.type}>{item.name}</label>
						
					</>
				)
		);
	};

  console.log(lowPrice)

	const displayStructures = () => {
		return items.map(
			(item, key) =>
				item.type === "STRUCTURES" && (
					<>
						<h5 className={key}>{item.name}</h5>
					</>
				)
		);
	};

	const displayLighting = () => {
		return items.map(
			(item, key) =>
				item.type === "LIGHTING" && (
					<>
						<h5 className={key}>{item.name}</h5>
					</>
				)
		);
	};

	const displayGroundCover = () => {
		return items.map(
			(item, key) =>
				item.type === "GROUND_COVER" && (
					<>
						<h5 className={key}>{item.name}</h5>
					</>
				)
		);
	};

	const displayDeckMaterial = () => {
		return items.map(
			(item, key) =>
				item.type === "DECK_MATERIAL" && (
					<>
						<h5 className={key}>{item.name}</h5>
					</>
				)
		);
	};

	const displayFencing = () => {
		return items.map(
			(item, key) =>
				item.type === "FENCING" && (
					<>
						<h5 className={key}>{item.name}</h5>
					</>
				)
		);
	};

	return (
		<div className=''>
			<h1>Please enter a budget for your project</h1>
			<input type='text' />
			<h3>Select items to be added to your home (select one item per type)</h3>
			<h5>Water Features</h5>
			{displayWaterFeatures()}
			<h5>Structures</h5>
			<h5>Lighting</h5>
			<h5>Ground Cover</h5>
			<h5>Deck Material</h5>
			<h5>Fencing and Privacy</h5>
		</div>
	);
}

export default App;
