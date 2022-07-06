import React from "react";
import Result from "./Result";
import CategorySection from "./CategorySection";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";

import "./Datapad.css";

function Datapad() {

  const [itemToShow, setItemToShow] = React.useState('')

  function searchClickHandler() {
    // Gets data based on what was keyed into the search bar.
    
  }

  function grabCatLink(link) {
    setItemToShow(link)
  }


  return (
    <div>
      <form id="find-subject-form" className="mt-5 px-5">
        <div className="input-group mb-3">
          
          <CategorySection 
            updateLinkToDataPadForm={grabCatLink}
          />
          <SearchBar 
            itemToShow={itemToShow}
          />
          <SearchButton 
            searchClickHandler={searchClickHandler}
          />
          
          
          {/* <input
            type="text"
            className="form-control"
            placeholder="Enter your query"
            aria-label="Enter your query"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn text-uppercase"
              type="button"
              id="button-addon2"
            >
              punch it, chewie!
            </button>
          </div> */}


        </div>
      </form>

      <Result />
    </div>
  );
}

export default Datapad;
