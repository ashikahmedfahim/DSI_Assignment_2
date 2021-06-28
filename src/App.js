import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const productData = [];
  var options = {
    method: "GET",
    url: "https://amazon-products1.p.rapidapi.com/search",
    params: { country: "US", query: "macbook+pro", page: "1" },
    headers: {
      "x-rapidapi-key": "f22158101dmsh55cd764a559dc33p13e873jsnfb4a3f29d95b",
      "x-rapidapi-host": "amazon-products1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      productData.push(response.data.results);
      console.log(productData);
    })
    .catch(function (error) {
      console.error(error);
    });

  return <div>{productData && productData.map((product) => console.log(product))}</div>;
}

export default App;
