
import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import '../Styles/UserProfileCard.css';
import UserInfo from './dummyData';
import UserProfilePicture from '../Illustrations/UserProfilePicture.png';
import UserProfilePage from '../pages/UserProfilePage';
import {Link} from 'react-router-dom';

function UserProfileCard({ user }) {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate(`/userProfilePage/${user.id}`);
  };

  return (
    <div className='UserProfileCard'>
      
      <img src={UserProfilePicture} alt={`${user.name}'s profile`} />
      <div className='user_handle'>{user.user_handle}</div>
      <div className='name'>{user.name}</div>
      <div className='country'>{user.country}</div>
      <div className='story_count'>{`${user.name} has ${user.story_count} stories! `}</div>
      {/* Add button or click action here */}
      <Link to={{
      pathname: '/userProfilePage',
      state: {user}
    }} >Learn More</Link>
      <button className='button' onClick={() => handleButtonClick('Destinations')}>
        Lets go!
      </button>
    </div>
  );
}

export default UserProfileCard;