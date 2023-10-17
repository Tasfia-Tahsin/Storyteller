import './Styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import HomepageContent from './Components/HomepageContent'
import logo from './Illustrations/storytellerLogo.png';
import LandingPage from './pages/LandingPage'; 
import Explore from './pages/Explore';
import UserProfiles from  './pages/UserProfiles'; 
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/userprofiles" element={<UserProfiles />} />
          <Route path="/userProfilePage/:userId" element={<UserProfilePage />} />
        </Routes>
    </Router>
    
  );
}

export default App;
