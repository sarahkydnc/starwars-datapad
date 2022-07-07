import React from "react";
import Result from "./Result";
import CategorySection from "./CategorySection";
import SearchButton from "./SearchButton";
import SearchBar from "./SearchBar";
import {getAPI} from "../logic";

import "./Datapad.css";

function Datapad() {

  const [catLink, setCatLink] = React.useState('')
  const [result, setResult] = React.useState('')
  const [queryLink, setQueryLink] = React.useState('')


  function grabCatLink(link) {
    // This function grabs the swapi URL from the button clicked

    setCatLink(link)
  }

  async function beginSearch(url) {
    // beginSearch calls the getAPI function from logic.js
    // logic.js handles axios 
    let answer = await getAPI(url);
    setResult(<>
      <h3> {answer.results[0].name} </h3>
      <h4> Birth Year: {answer.results[0].birth_year}</h4>
      <h4> Height: {answer.results[0].height}</h4>
      <h4> Mass: {answer.results[0].mass}</h4>
      </>
      )
    
    console.log(answer)
    
    return answer
  }

  function searchHandler(e) {
    // This function concatenates whatever the user typed with state catLink (set in grabCatLink).
    // Following which it begins the search in the API.

    e.preventDefault();
    //e.target[6].value explanation: This is the input field's value
    const userQuery = "https://" + catLink + e.target[6].value
    beginSearch(userQuery)
        
   }


  return (
    <div>
      <form id="find-subject-form" className="mt-5 px-5" onSubmit={searchHandler}>
        <div className="input-group mb-3">
          
          <CategorySection 
            updateLinkToDataPadForm={grabCatLink}
          />
          <SearchBar />
          <SearchButton/>
          
          
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

      <Result 
        result={result}/>
    </div>
  );
}

export default Datapad;
