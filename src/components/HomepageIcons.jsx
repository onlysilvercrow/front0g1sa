import React, { useState, useEffect } from "react";
import Angklung from "../webimages/Angklung.png";
import Scroll from "../webimages/Scroll.png";
import Navbar from "./Navbar";

function HomepageIcons() {
  const [currentImage, setCurrentImage] = useState(Angklung);
  const [imageClicked, setImageClicked] = useState(false);
  useEffect(() => {
    const storedImage = localStorage.getItem("currentImage");
    if (storedImage && (storedImage === Angklung || storedImage === Scroll)) {
      setCurrentImage(storedImage);
    } else {
      setCurrentImage(Angklung);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentImage", currentImage);
  }, [currentImage]);

  useEffect(() => {
    const handleRefresh = () => {
      setCurrentImage((prevImage) => {
        if (prevImage === Angklung) {
          return Scroll;
        } else {
          return Angklung;
        }
      });
    };

    window.addEventListener("beforeunload", handleRefresh);

    return () => {
      window.removeEventListener("beforeunload", handleRefresh);
    };
  }, []);

  const handleClick = () => {
    setImageClicked(!imageClicked)
  }

  return (
    <div>
      {currentImage == Angklung &&  
        <><button onClick={handleClick}><img src={currentImage} className = "h-28" alt="Current Image" /></button>
        <Navbar className= {imageClicked ? "hidden" : "hidden"} /></>
      }
      
      {currentImage == Scroll &&  <button onClick={handleClick}><img src={currentImage}  className = "w-24" alt="Current Image" /></button>}
  
    </div>
  );
}

export default HomepageIcons;
