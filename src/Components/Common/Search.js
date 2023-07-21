import React from "react";
// import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Search = ({ search, onChange }) => {
    return (

        <div className="flex justify-between pl-1 pr-2">
            <input type="text" placeholder="Search here" className="" value={search} onChange={onChange} />
            <SearchRoundedIcon className="mt-1" />
        </div>

    );
};

export default Search;