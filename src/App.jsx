import { useState, useEffect } from "react";
import axios from "axios";

import Card from "./components/card/Card";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Skeleton from "./components/skeleton/Skeleton";
function App() {
	const [cardData, setCardData] = useState([]);
	const getCardData = async () => {
		const response = await axios.get(
			"https://fakestoreapi.com/products?limit=10",
		);
		console.log(response);
		setCardData(response.data);
	};

	useEffect(() => {
		getCardData();
	}, []);

	return (
		<div className="app">
			<div className=" app-Wrapper">
				<Sidebar />
				<main className="main-content">
					{cardData.length > 0 ? (
						cardData?.map((card) => <Card {...card} />)
					) : (
						<Skeleton />
					)}
				</main>
			</div>
		</div>
	);
}

export default App;
