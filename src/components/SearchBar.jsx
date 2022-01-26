import React from "react";

const SearchBar = ({ searchedBar, callbackSearch }) => {
	return (
		<>
			<input
				type="text"
				placeholder="Search food"
				value={searchedBar}
				onChange={(e) => callbackSearch(e.target.value)}
			/>
		</>
	);
};

export default SearchBar;
