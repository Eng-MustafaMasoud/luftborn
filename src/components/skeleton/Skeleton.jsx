import "./skeleton.scss";
export default function Skeleton() {
	return (
		<div className="skeleton">
			{[...Array(10)].map((card, index) => (
				<li key={index} className="skelton_wrapper">
					<p className=""></p>
					<span className=" ">
						{" "}
						<p className=""></p>
						<p className=""></p>
					</span>
					<span className=" ">
						{" "}
						<p className=""></p>
						<p className=""></p>
					</span>
					<span className=" ">
						{" "}
						<p className=""></p>
						<p className=""></p>
					</span>
				</li>
			))}
		</div>
	);
}
