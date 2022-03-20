import React, { useState, useEffect } from "react";
import "./App.css";
import { getItems, db } from "./firebase";

function App() {
	const [items, setItems] = useState([]);
	let [waterLow, setWaterLow] = useState(0);
	let [structureLow, setStructureLow] = useState(0);
	let [lightLow, setLightLow] = useState(0);
	let [groundLow, setGroundLow] = useState(0);
	let [deckLow, setDeckLow] = useState(0);
	let [fencingLow, setFencingLow] = useState(0);
	let [waterHigh, setWaterHigh] = useState(0);
	let [structureHigh, setStructureHigh] = useState(0);
	let [lightHigh, setLightHigh] = useState(0);
	let [groundHigh, setGroundHigh] = useState(0);
	let [deckHigh, setDeckHigh] = useState(0);
	let [fencingHigh, setFencingHigh] = useState(0);

	useEffect(() => {
		getItems(db, setItems);
	}, []);

	const handleChange = (e) => {
    const prices = e.target.value.split(',')
		setWaterLow(Number(prices[0]));
	};
	console.log(waterLow);
	const displayWaterFeatures = () => {
		return items.map(
			(item, key) =>
				item.type === "WATER_FEATURES" && (
					<>
						<label for={item.type}>
							<input
								type='radio'
								value={[item.lowPrice,item.highPrice]}
								id={item.type}
								onClick={handleChange}
								name={item.type}
							/>
							{item.name}
							{item.lowPrice}
						</label>
					</>
				)
		);
	};

	// console.log(waterLow);

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
