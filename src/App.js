import React, { useState } from "react";
import { data } from "./Assets/Data/data";

function App() {
  const [primaryData, setprimaryData] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="container">
      <p className="display-6 text-center m-5">DSI Web Assignment</p>
      <div className="text-center mt-5 mb-1 form-group">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search here . . . "
          className="form-control"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button className="btn btn-success mt-3 mx-2 px-5 py-2">Search</button>
      </div>
      <div className="text-center">
        <button className="btn btn-primary m-2 px-3 py-2">Sort by name</button>
        <button className="btn btn-primary m-2 px-3 py-2">Sort by Price</button>
      </div>

      <div className="row">
        {primaryData &&
          primaryData.map((productDetails, i) => (
            <div className="card col-4 m-3" style={{ width: "18rem" }}>
              <a href={productDetails.link}>
                <img
                  className="card-img-top pt-1"
                  style={{ objectFit: "fill", height: "15rem", width: "15rem" }}
                  src={productDetails.img}
                  alt="Card image cap"
                ></img>
              </a>
              <div className="card-body">
                <h5 className="card-title">{productDetails.name}</h5>
                <p className="card-text">
                  BDT: {parseInt(productDetails.price * 80)}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
