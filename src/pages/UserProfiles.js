import React , { useState }from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from "react-router-dom";
import '../Styles/Explore.css';
import '../Styles/UserProfile.css';
import { Link } from 'react-router-dom';
import UserProfileCard from '../Components/UserProfileCard';
import UserInfo from '../Components/dummyData';
import 'font-awesome/css/font-awesome.min.css';


function UserProfiles() {

  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleButtonClick = (category) => {
    // Handle the button click for the given category
    console.log(`Clicked on ${category}`);
    navigate("/");
  };

  // Filter user profiles based on the search term
  const filteredUsers = UserInfo.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Navbar/>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className='UserProfile'>
            {UserInfo.map((user, index) => (
            <UserProfileCard key={index} user={user} />
            ))}
        </div>
    </div>
  );
}

export default UserProfiles;
