import React from "react";
import profile from "../../assets/profile.png";
import "./sidebar.scss";
const Sidebar = () => {
	return (
		<aside className="sidebar">
			<div className="sidebar__wrapper">
				<div className="sidebar__wrapper-image">
					<img src={profile} alt="profile" title="profile" />
					<div className="sidebar__wrapper-image-text">
						<div className="text-wrapper">
							<span className="heading">Report for</span>
							<div className="textb">
								<p className="text">Best</p>
								<p className="text">Sales</p>
							</div>
						</div>
					</div>
				</div>
				<div className="sidebar__wrapper-content">
					<p className="sidebar__wrapper-subtitle">Daily</p>
					<p className="sidebar__wrapper-subtitle">Weekly</p>
					<p className="sidebar__wrapper-subtitle">Monthly</p>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
