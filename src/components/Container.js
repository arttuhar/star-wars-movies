import React from "react";
import GridItem from "./GridItem";
import Pagination from "./Pagination";
import Sort from "./Sort";

function Container(props) {
	return (
		<div>
			<div className="container">
				<div className="content">
					<div className="contentContainer">
						<div className="sortingButtons">
							<Sort
								sortByTitle={props.sortByTitle}
								sortByTitleHandler={props.sortByTitleHandler}
								sortByYear={props.sortByYear}
								sortByYearHandler={props.sortByYearHandler}
								sortTitleIcon={props.sortTitleIcon}
								sortYearIcon={props.sortYearIcon}
								isTitleActive={props.isTitleActive}
								isYearActive={props.isYearActive}
							/>
						</div>
						<div className="resultsGrid">
							<GridItem showResults={props.showResults} />
						</div>
						<div className="paginationLinks">
							<Pagination
								pageCount={props.pageCount}
								pageChange={props.pageChange}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Container;
