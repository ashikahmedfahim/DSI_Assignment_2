import React, { useState } from "react";
import { data } from "./Assets/Data/data";

function App() {
  const [primaryData, setprimaryData] = useState(data);

  return (
    <div className="container">
      <p className="display-6 text-center m-5">DSI Web Assignment</p>

      <div className="row">
        {primaryData &&
          primaryData.map((productDetails, i) => (
            <div className="card col-4 m-3" style={{ width: "18rem" }}>
              <a href={productDetails.link}>
                <img
                  className="card-img-top"
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
