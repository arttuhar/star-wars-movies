import React from "react";

function Sort(props) {
	return (
		<div className="sort">
			<div className="sortHeading">
				<h3>Sort:</h3>
			</div>
			<div className="sortButtons">
				<button
					className={props.isTitleActive}
					type="button"
					value={props.sortByTitle}
					onClick={props.sortByTitleHandler}
				>
					{props.sortTitleIcon} Title
				</button>
				<button
					className={props.isYearActive}
					type="button"
					value={props.sortByYear}
					onClick={props.sortByYearHandler}
				>
					{props.sortYearIcon} Year
				</button>
			</div>
		</div>
	);
}

export default Sort;
