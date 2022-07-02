import React from "react";
import Result from "./Result";

import "./Datapad.css";

function Datapad() {
  return (
    <div>
      <form id="find-subject-form" className="mt-5 px-5">
        <div className="input-group mb-3">
          <input
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
          </div>
        </div>
      </form>

      <Result />
    </div>
  );
}

export default Datapad;
