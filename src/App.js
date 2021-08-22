import React, { useState, useEffect } from "react";
import "./scss/App.scss";
import axios from "axios";

import Heading from "./components/Heading";
import Container from "./components/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSort,
	faSortUp,
	faSortDown,
} from "@fortawesome/free-solid-svg-icons";

function App() {
	const imdbUrl = "https://www.imdb.com/title/";

	const [movies, setMovies] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);

	const [sortByTitle, setSortByTitle] = useState("");
	const [sortByYear, setSortByYear] = useState("");

	const [sortTitleIcon, setSortTitleIcon] = useState(
		<FontAwesomeIcon icon={faSort} />
	);
	const [sortYearIcon, setSortYearIcon] = useState(
		<FontAwesomeIcon icon={faSort} />
	);

	const [isTitleActive, setIsTitleActive] = useState("notActiveTitle");
	const [isYearActive, setIsYearActive] = useState("notActiveYear");

	useEffect(() => {
		axios
			.get(`https://frantic.s3-eu-west-1.amazonaws.com/films.json`)
			.then(res => {
				const responseMovies = res.data.films;
				setMovies(responseMovies);
				console.log(res);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	const resultsPerPage = 8;
	const pagesVisited = pageNumber * resultsPerPage;

	const sortByTitleHandler = e => {
		if (e.target.value === "") {
			setSortByTitle("az");
			setSortByYear("");
			setSortTitleIcon(<FontAwesomeIcon icon={faSortUp} />);
			setSortYearIcon(<FontAwesomeIcon icon={faSort} />);
			setIsTitleActive("activeTitle");
			setIsYearActive("notActiveYear");
		} else if (e.target.value === "az") {
			setSortByTitle("za");
			setSortByYear("");
			setSortTitleIcon(<FontAwesomeIcon icon={faSortDown} />);
			setSortYearIcon(<FontAwesomeIcon icon={faSort} />);
			setIsTitleActive("activeTitle");
			setIsYearActive("notActiveYear");
		} else if (e.target.value === "za") {
			setSortByTitle("");
			setSortByYear("");
			setSortTitleIcon(<FontAwesomeIcon icon={faSort} />);
			setIsTitleActive("notActiveTitle");
		}
		console.log(e.target.value);
	};

	const sortByYearHandler = e => {
		if (e.target.value === "") {
			setSortByYear("newest");
			setSortByTitle("");
			setSortYearIcon(<FontAwesomeIcon icon={faSortUp} />);
			setSortTitleIcon(<FontAwesomeIcon icon={faSort} />);
			setIsYearActive("activeYear");
			setIsTitleActive("notActiveTitle");
		} else if (e.target.value === "newest") {
			setSortByYear("oldest");
			setSortByTitle("");
			setSortYearIcon(<FontAwesomeIcon icon={faSortDown} />);
			setSortTitleIcon(<FontAwesomeIcon icon={faSort} />);
			setIsYearActive("activeYear");
			setIsTitleActive("notActiveTitle");
		} else if (e.target.value === "oldest") {
			setSortByYear("");
			setSortByTitle("");
			setSortYearIcon(<FontAwesomeIcon icon={faSort} />);
			setIsYearActive("notActiveYear");
		}
		console.log(e.target.value);
	};

	const showResults = movies
		.sort((a, b) => {
			if (sortByYear === "newest") {
				return a.Year > b.Year ? -1 : 1;
			} else if (sortByYear === "oldest") {
				return a.Year > b.Year ? 1 : -1;
			}

			if (sortByTitle === "az") {
				return a.Title > b.Title;
			} else if (sortByTitle === "za") {
				return a.Title < b.Title;
			}

			return 0;
		})
		.slice(pagesVisited, pagesVisited + resultsPerPage)
		.map((movie, idx) => {
			return (
				<div key={idx} className="gridCard">
					<div className="posterContainer">
						<a
							className="imdbLink"
							href={imdbUrl + movie.imdbID}
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="poster"
								src={movie.Poster}
								alt="Movie poster"
								onError={e => {
									e.target.onError = null;
									e.target.src =
										"https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png";
								}}
							/>
						</a>
					</div>
					<div className="movieDetails">
						<h3 className="movieYear">{movie.Year}</h3>
						<h3 className="movieTitle">{movie.Title}</h3>
					</div>
				</div>
			);
		});

	const pageCount = Math.ceil(movies.length / resultsPerPage);

	const pageChange = ({ selected }) => {
		setPageNumber(selected);
	};

	return (
		<div className="App">
			<Heading />
			<Container
				showResults={showResults}
				pageCount={pageCount}
				pageChange={pageChange}
				sortByTitle={sortByTitle}
				sortByTitleHandler={sortByTitleHandler}
				sortByYear={sortByYear}
				sortByYearHandler={sortByYearHandler}
				sortTitleIcon={sortTitleIcon}
				sortYearIcon={sortYearIcon}
				isTitleActive={isTitleActive}
				isYearActive={isYearActive}
			/>
		</div>
	);
}

export default App;
