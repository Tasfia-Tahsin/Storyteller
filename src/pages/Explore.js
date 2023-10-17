import React from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from "react-router-dom";
import '../Styles/Explore.css';
import { Link } from 'react-router-dom';
function Explore() {
  let navigate = useNavigate();
  const handleButtonClick = (category) => {
    // Handle the button click for the given category
    console.log(`Clicked on ${category}`);
    if(category !== "Destination"){
      navigate("/userprofiles");
    }
  };
  return (
    <div>
      <Navbar/>
      <div className='ExplorePage'>
        jnknknkn
        <div className='ExploreProfile'>
          <div className='ExploreContent'>
              Find the profiles of your favourite travel bloggers here. 
              <button className='button' onClick={() => handleButtonClick('Profiles')}>
              Lets go!
            </button>
          </div>
          
        </div>
        <div className='ExploreDestinations'>
            <div className='ExploreContent'>
              Findout the posts that tell about your favourite destinations. 
              <button className='button' onClick={() => handleButtonClick('Destinations')}>
              Lets go!
            </button>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Explore;
