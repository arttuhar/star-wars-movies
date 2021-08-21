import React, { useState, useEffect } from "react";
import "./scss/App.scss";
import axios from "axios";

import Heading from "./components/Heading";
import Container from "./components/Container";

function App() {
	const imdbUrl = "https://www.imdb.com/title/";

	const [movies, setMovies] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);

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

	const showResults = movies
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
			/>
		</div>
	);
}

export default App;
