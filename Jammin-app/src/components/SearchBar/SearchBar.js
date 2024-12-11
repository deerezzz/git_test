import React from 'react'; 
import './SearchBar.css';


function SearchBar() {
    return (
        <div className="SearchBar"> 
         <input type="text" placeholder="Enter A song, Album, or Artist"/>
         <button className="SearchButton">Search</button> 
        </div>
    );
}

export default SearchBar; 