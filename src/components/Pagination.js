import React from "react";
import ReactPaginate from "react-paginate";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Pagination(props) {
	return (
		<div className="pagination">
			<ReactPaginate
				previousLabel={
					<div className="prevButtonSpan">
						<span className="prevButtonIcon">
							<FontAwesomeIcon icon={faCaretLeft} />
						</span>
						<span className="prevButtonText">Previous page</span>
					</div>
				}
				nextLabel={
					<span className="nextButtonSpan">
						<span className="nextButtonText">Next page</span>
						<span className="nextButtonIcon">
							<FontAwesomeIcon icon={faCaretRight} />
						</span>
					</span>
				}
				pageCount={props.pageCount}
				onPageChange={props.pageChange}
				pageRangeDisplayed={0}
				marginPagesDisplayed={0}
				breakLabel={""}
				containerClassName={"paginationContainer"}
				previousLinkClassName={"paginationPrevious"}
				previousClassName={"previous"}
				nextLinkClassName={"paginationNext"}
				nextClassName={"next"}
				activeClassName={"paginationActive"}
			/>
		</div>
	);
}

export default Pagination;
