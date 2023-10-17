import React from 'react';
import Navbar from '../Components/Navbar';
import HomepageContent from '../Components/HomepageContent'
import logo from '../Illustrations/storytellerLogo.png';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div className='Homepage'>
      <Navbar/>
      <div className='HomepageContent'>
        <div className='ccvxcv'>The storyteller</div>
        <div className='Storyteller'>The storyteller</div>
        <div className='websiteIntro'>Share your stories behind and with your pictures</div>
        <Link to="/explore" className="button-74">Explore now!</Link>
      </div>
    </div>
  );
}

export default LandingPage;
