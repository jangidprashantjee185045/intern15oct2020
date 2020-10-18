import React from 'react';
import './search.css'

const Searchbar=()=>{
    return(
        <div className="search-bar">
         <div className="search-bar-in">   
            <input type="text" placeholder="Search Doctors" />
            <i className="fa fa-search fa-lg " aria-hidden="true"></i>
        </div>
        </div>
    )
}


export default Searchbar;
