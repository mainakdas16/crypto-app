import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Coin from "./Coin";

function App() {

	// from api we get the json data as an array of objects
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');

	useEffect( () => {
		axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
		.then( function(response) {
			console.log(response.data);
			setCoins(response.data);
		} ).catch(function(error) {
			console.log(error);
		});
	}, [] );

	const handleChange = e => {
		setSearch(e.target.value);
	}

	const filteredCoins = coins.filter(coin =>
		// 
		coin.name.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<div className="coins-app">
			<div className="header">
			<img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/128/icon/$pac.png" alt="" />
			<img src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/128/color/add.png" alt="" />
				<h1>
					<b>Crypto Currency Tracker</b>
				</h1>
					
			</div>
			<div className="coin-search">
				<h2 className="coin-text"> Search Currency </h2>
				<form> 
					<input type="text" className="coin-input" placeholder="Search" onChange={handleChange}/>
				</form>
			</div>

			<div class="container c c1">
				<div class="row">
					<div class="col-sm decor">
						Icon
					</div>
					<div class="col-sm decor">
						Coin
					</div>
					<div class="col-sm decor">
					 	Symbol
					</div>
					<div class="col-sm decor">
						Price
					</div>
					<div class="col-sm decor">
						volume 24h
					</div>
					<div class="col-sm decor">
						price_Change_24h
					</div>
					<div class="col-sm decor">
						Market Cap
					</div>
				</div>
			</div>

			{filteredCoins.map(coin => {
				return (
					<Coin 
					key = {coin.id} 
					name = {coin.name}  
					price = {coin.current_price}
					volume = {coin.total_volume}
					image = {coin.image}
					symbol = {coin.symbol}
					marketcap = {coin.market_cap}
					pricechange = {coin.price_change_percentage_24h}

					/>
				)
			})}
		</div>
	);
}

export default App;
