import React, { useState, useEffect } from "react";
import Angklung from "../webimages/Angklung.png";
import Scroll from "../webimages/Scroll.png";
import Navbar from "./Navbar";

function HomepageIcons() {
  //in future randomise first load image
  const [image, setImage] = useState(localStorage.getItem("image") || "Angklung")
  const [imageClicked, setImageClicked] = useState(false);

  useEffect(()=> {
    if (localStorage.getItem("image") === "Angklung"){
      setImage("Scroll")
    } else if(localStorage.getItem("image") === "Scroll"){
      setImage("Angklung")
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("image", image) 
  },[image])

const handleClick = () => {
  setImageClicked(!imageClicked)
}

return (
  <>
    {image == "Angklung" && 
      <div className="flex flex-col justify-center content-center">
        <div className="flex justify-center mb-7"><img src={Angklung} onClick={handleClick} className = "h-28 cursor-pointer" alt="Current Image" /></div>
        
        <div className={imageClicked ? "visible animate-fadeIn " :"invisible"}><Navbar/></div>
      </div>
    }
    
    {image == "Scroll" &&  
      <div className="flex flex-col justify-center content-center">
        <div className="flex justify-center mb-7"><img src={Scroll} onClick={handleClick} className = "w-24 cursor-pointer" alt="Current Image" /></div>
        <div className={imageClicked ? "visible animate-fadeIn" :"invisible"}><Navbar/></div>
      </div>
    }
  </>
);
}

export default HomepageIcons;
