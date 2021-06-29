import React, { useState } from "react";
import { data } from "./Assets/Data/data";

function App() {
  const [primaryData, setprimaryData] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const search = () => {
    if (searchValue === "") {
      setprimaryData(data);
    } else {
      const searchedArray = primaryData.filter((dt) => {
        return dt.name.includes(searchValue);
      });
      setprimaryData(searchedArray);
    }
  };

  const sortByPriceLow = () => {
    setprimaryData(()=>{return sortData("L")});
  };

  const sortByPriceHigh = () => {
    setprimaryData(()=>{return sortData("H")});
  };

  const sortData = (value) => {
    const prices = primaryData.map((dt) => dt.price);
    let sortedPrice = prices.sort();
    if(value === "H"){
      sortedPrice.reverse();
    }
    const sortedData = [];
    sortedPrice.map((price) =>
      sortedData.push(primaryData.filter((dt) => dt.price === price)[0])
    );
    return sortedData;
  };

  return (
    <div className="container">
      <p className="display-6 text-center m-5">DSI Web Assignment</p>
      <div className="text-center mt-5 mb-1 form-group">
        <input
          type="text"
          placeholder="Search here . . . "
          className="form-control"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          className="btn btn-success mt-3 mx-2 px-5 py-2"
          onClick={search}
        >
          Search
        </button>
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary m-2 px-3 py-2"
          onClick={sortByPriceLow}
        >
          Sort by Price (Low to High)
        </button>
        <button
          className="btn btn-primary m-2 px-3 py-2"
          onClick={sortByPriceHigh}
        >
          Sort by Price (High to Low)
        </button>
      </div>

      <div className="row">
        {primaryData &&
          primaryData.map((productDetails, i) => (
            <div key={i} className="card col-4 m-3" style={{ width: "18rem" }}>
              <a href={productDetails.link}>
                <img
                  className="card-img-top pt-1"
                  style={{ objectFit: "fill", height: "15rem", width: "15rem" }}
                  src={productDetails.img}
                  alt="Card cap"
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
