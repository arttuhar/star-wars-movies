import React from "react";

function Sort() {
	return (
		<div className="sort">
			<div className="sortHeading">
				<h3>Sort:</h3>
			</div>
			<div className="sortButtons">
				<button
					className="sortButton byTitleButton"
					type="button"
					value="value"
				>
					Title
				</button>
				<button className="sortButton byYearButton" type="button" value="value">
					Year
				</button>
			</div>
		</div>
	);
}

export default Sort;
