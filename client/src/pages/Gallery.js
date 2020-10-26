import React from "react";
import API from "../utils/API"


function Gallery() {


  API.getShifts()
  .then(json =>{
    console.log(json);
    
  })




  return (

      <h1 className="text-center">Welcome to LinkedUp</h1>

  );
}

export default Gallery;
