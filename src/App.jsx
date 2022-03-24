import React, { useState, useEffect } from "react";
import "./App.css";
import { getItems, db } from "./firebase";
import "./index.scss";
import { useForm } from "react-hook-form";

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

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		setShowItems(true);
		setBudget(data.budget)
	};

	useEffect(() => {
		getItems(db, setItems);
	}, []);

	const handleChange = (e) => {
		const prices = e.target.value.split(",");
		switch (e.target.name) {
			case "WATER_FEATURES":
				if (e.target.id === radioKey) {
					setWaterLow(0);
					setWaterHigh(0);
					setRadioKey(null);
					e.target.checked = false;
				} else {
					setWaterLow(Number(prices[0]));
					setWaterHigh(Number(prices[1]));
					setRadioKey(e.target.id);
					e.target.checked = true;
				}
				break;
			case "STRUCTURES":
				if (e.target.id === radioKey) {
					setStructureLow(0);
					setStructureHigh(0);
					setRadioKey(null);
					e.target.checked = false;
				} else {
					setStructureLow(Number(prices[0]));
					setStructureHigh(Number(prices[1]));
					setRadioKey(e.target.id);
					e.target.checked = true;
				}
				break;
			case "LIGHTING":
				if (e.target.id === radioKey) {
					setLightLow(0);
					setLightHigh(0);
					setRadioKey(null);
					e.target.checked = false;
				} else {
					setLightLow(Number(prices[0]));
					setLightHigh(Number(prices[1]));
					setRadioKey(e.target.id);
					e.target.checked = true;
				}
				break;
			case "GROUND_COVER":
				if (e.target.id === radioKey) {
					setGroundLow(0);
					setGroundHigh(0);
					setRadioKey(null);
					e.target.checked = false;
				} else {
					setGroundLow(Number(prices[0]));
					setGroundHigh(Number(prices[1]));
					setRadioKey(e.target.id);
					e.target.checked = true;
				}
				break;
			case "DECK_MATERIAL":
				if (e.target.id === radioKey) {
					setDeckLow(0);
					setDeckHigh(0);
					setRadioKey(null);
					e.target.checked = false;
				} else {
					setDeckLow(Number(prices[0]));
					setDeckHigh(Number(prices[1]));
					setRadioKey(e.target.id);
					e.target.checked = true;
				}
				break;
			case "FENCING_AND_PRIVACY":
				if (e.target.id === radioKey) {
					setFencingLow(0);
					setFencingHigh(0);
					setRadioKey(null);
					e.target.checked = false;
				} else {
					setFencingLow(Number(prices[0]));
					setFencingHigh(Number(prices[1]));
					setRadioKey(e.target.id);
					e.target.checked = true;
				}
				break;
			default:
				console.log("nothing");
				break;
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


	const displayStructures = () => {
		return items.map(
			(item, key) =>
				item.type === "STRUCTURES" && (
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

	const displayLighting = () => {
		return items.map(
			(item, key) =>
				item.type === "LIGHTING" && (
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

	const displayGroundCover = () => {
		return items.map(
			(item, key) =>
				item.type === "GROUND_COVER" && (
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

	const displayDeckMaterial = () => {
		return items.map(
			(item, key) =>
				item.type === "DECK_MATERIAL" && (
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

	const displayFencing = () => {
		return items.map(
			(item, key) =>
				item.type === "FENCING_AND_PRIVACY" && (
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

	let totalCostLow = Number(
		waterLow + structureLow + lightLow + groundLow + deckLow + fencingLow
	);
	let totalCostHigh = Number(
		waterHigh + structureHigh + lightHigh + groundHigh + deckHigh + fencingHigh
	);

	const withinBudget = () => {
		return (
			<>
				{(() => {
					if (totalCostLow <= budget && budget <= totalCostHigh) {
						return (
							<p className='green'>
								The items you have selected are within your budget.
							</p>
						);
					} else if (totalCostLow < budget) {
						return <p>The items you have selected are under budget.</p>;
					} else {
						return (
							<p className='red'>
								The items you have selected are over your price range.
							</p>
						);
					}
				})()}
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
				<div className='container'>{displayStructures()}</div>
				<h5>Lighting</h5>
				<div className='container'>{displayLighting()}</div>
				<h5>Ground Cover</h5>
				<div className='container'>{displayGroundCover()}</div>
				<h5>Deck Material</h5>
				<div className='container'>{displayDeckMaterial()}</div>
				<h5>Fencing and Privacy</h5>
				<div className='container'>{displayFencing()}</div>
				<div className='footer'>
					<p>Your budget is ${Number(budget).toLocaleString("en-US")}.</p>
					<p>
						Your estimated cost is from $
						{Number(totalCostLow).toLocaleString("en-US")} to $
						{Number(totalCostHigh).toLocaleString("en-US")}.
					</p>
					<p>{withinBudget()}</p>
				</div>
			</>
		);
	};

	return (
		<div className='container' onSubmit={handleSubmit(onSubmit)}>
			<h1>What's your budget for your dream home?</h1>
			<form action=''>
				<div className='flex'>
					<input
						type='number'
						placeholder='20,000,000'
						{...register("budget", { required: true, valueAsNumver: true })}
					/>
					<input className='submit' type='submit' />
				</div>
        {errors.budget && <span className='red'>Budget is required</span>}
			</form>

			{showItems ? displayItems() : null}
		</div>
	);
}

export default App;
