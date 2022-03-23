import React, { useState, useEffect } from "react";
import "./App.css";
import { getItems, db } from "./firebase";
import "./index.scss";

function App() {
	const [items, setItems] = useState([]);
	let [budget, setBudget] = useState(0);
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
	let [radioKey, setRadioKey] = useState(null);
  let [showItems, setShowItems] = useState(false);

	useEffect(() => {
		getItems(db, setItems);
	}, []);

	const handleChange = (e) => {
		const prices = e.target.value.split(",");
		if (e.target.id === radioKey) {
			setWaterLow("");
			setWaterHigh("");
			setRadioKey(null);
			e.target.checked = false;
		} else {
			setWaterLow(Number(prices[0]));
			setWaterHigh(Number(prices[1]));
			setRadioKey(e.target.id);
			e.target.checked = true;
		}
	};

	const displayWaterFeatures = () => {
		return items.map(
			(item, key) =>
				item.type === "WATER_FEATURES" && (
					<>
						<input
							type='radio'
							value={[item.lowPrice, item.highPrice]}
							id={key}
							onClick={handleChange}
							name={item.type}
						/>
						<label htmlFor={key}>
							<p>{item.name}</p>
							<span>
								Price Range: ${item.lowPrice.toLocaleString("en-US")} to $
								{item.highPrice.toLocaleString("en-US")}
							</span>
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

	const withinBudget = () => {
		return (
			<>
				{waterLow > budget && (
					<p>The items you have selected are out of your price range</p>
				)}
				{waterLow <= budget && (
					<p>The items you have selected are within your price range</p>
				)}
			</>
		);
	};

	const displayItems = () => {
		return (
			<>
				<h3>
					Select items to be added to your home (select one item per type)
				</h3>
				<h5 className='title'>Water Features</h5>
				<div className='container'>{displayWaterFeatures()}</div>
				<h5>Structures</h5>
				<h5>Lighting</h5>
				<h5>Ground Cover</h5>
				<h5>Deck Material</h5>
				<h5>Fencing and Privacy</h5>
				<div className='footer'>
					<p>Your budget is ${Number(budget).toLocaleString("en-US")}</p>
					<p>
						Your estimated cost is from ${waterLow.toLocaleString("en-US")} to $
						{waterHigh.toLocaleString("en-US")}{" "}
					</p>
					<p>{withinBudget()}</p>
				</div>
			</>
		);
	};

	return (
		<div className='container'>
			<h1>What's your budget for your dream home?</h1>
			<div className='flex'>
				<input
					type='text'
					placeholder='20,000,000'
					onInput={(e) => setBudget(e.target.value)}
				/>
				<button onClick={() => setShowItems(true)}>Submit</button>
			</div>
      {showItems ? displayItems() : null}
		</div>
	);
}

export default App;
