import React from "react";
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
            <button className="btn" type="button" id="button-addon2">
              Button
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Datapad;
