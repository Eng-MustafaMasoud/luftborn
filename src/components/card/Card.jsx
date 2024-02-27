import { useEffect, useState } from "react";
import "./card.scss";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Card = ({ ...card }) => {
	const [color, setColor] = useState("");
	useEffect(() => {
		if (card.id === 1) {
			setColor("#FF8B64");
		} else if (card.id === 2) {
			setColor("#55C2E6");
		} else if (card.id === 3) {
			setColor("#FF5E7D");
		} else if (card.id === 4) {
			setColor("#FF8B64");
		} else if (card.id === 6) {
			setColor("#4BCF82");
		} else if (card.id === 5) {
			setColor("#55C2E6");
		} else if (card.id === 7) {
			setColor("#7335D2");
		} else if (card.id === 8) {
			setColor("#F1C75B");
		} else if (card.id === 10) {
			setColor("#7335D2");
		} else if (card.id === 9) {
			setColor("#4BCF82");
		}
	}, []);
	return (
		<div style={{ backgroundColor: `${color}` }} className="card">
			<div className="card_wrapper">
				<div className="title">
					<h2>{card.category}</h2>
					<span>
						<HiOutlineDotsHorizontal />
					</span>
				</div>
				<div className="wrapper">
					<div className="price">
						<span>${card.price} </span>
					</div>

					<div className="desc">
						<h6>{card.title}</h6>
						<span className="store">
							<p>inStore</p>
							<p>120</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
