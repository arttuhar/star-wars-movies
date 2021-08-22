import React from "react";

function Sort(props) {
	return (
		<div className="sort">
			<div className="sortHeading">
				<h3>Sort:</h3>
			</div>
			<div className="sortButtons">
				<button
					className="sortButton byTitleButton"
					type="button"
					value={props.sortByTitle}
					onClick={props.sortByTitleHandler}
				>
					Title
				</button>
				<button
					className="sortButton byYearButton"
					type="button"
					value={props.sortByYear}
					onClick={props.sortByYearHandler}
				>
					Year
				</button>
			</div>
		</div>
	);
}

export default Sort;
