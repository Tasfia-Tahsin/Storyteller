import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from "react-router-dom";
import '../Styles/UserProfilePage.css';
import { Link } from 'react-router-dom';
import UserInfo from '../Components/dummyData';
import Stories from '../Components/dummyStories';
import UserProfilePicture from '../Illustrations/UserProfilePicture.png';
import StoryIntro1 from '../Illustrations/TanguarHaorIntro.jpg';
import { useParams } from 'react-router-dom';


function UserProfilePage() {
  const { userId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  console.log(userId);
  let navigate = useNavigate();
  const handleButtonClick = (category) => {
    console.log(`Clicked on view Story button`);
  };
  console.log(UserInfo);
  
  const user = UserInfo.find((user) => user.id === parseInt(userId));
  const stories = Stories.filter((story) => story.id === parseInt(userId));


  console.log(stories);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <Navbar/>
        <div className='UserProfilePage'>
            <div className='UserIntroduction'>
                <img src= {UserProfilePicture} />
                <div className='Info'>
                    <div className='Text'>
                    <div className='Top'>
                    <h2 className='h1'>{user.name}</h2>
                    <button className='button' onClick={() => handleButtonClick('Destinations')}>
                                Follow 
                            </button>
                    </div>
                    <p>{user.bio}</p></div>
                    <div className='Preview'>
                        <div className='Following'>
                            {user.story_count}
                            <br />
                            <p>Stories</p>
                        </div>
                        <div className='Following'>{user.followers}
                            <br />
                            <p>Followers</p>
                        </div>
                    
                        <div className='Following'>
                        {user.country}
                            <br />
                            <p>Lives In</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='search-bar'>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        
        <div>
            {stories.map((story, index) =>(
                
                <div className='UserProfilePage'>
                    <div className='UserIntroduction'>
                        <img src= {StoryIntro1} />
                        <div className='Info'>
                            <div className='Text'>
                            <div className='Top'>
                                <h2 className='h1'>{story.place_name}</h2>
                                <button className='button' onClick={() => handleButtonClick('Destinations')}>
                                    View Story!
                                </button>
                            </div>
                            <p>{story.place_intro}</p></div>
                            <div className='Preview'>
                                <div className='Following'>
                                    {story.like_count}
                                    <br />
                                    <p>Likes</p>
                                </div>
                                <div className='Following'>
                                    {story.photo_count}
                                    <br />
                                    <p>Photos</p>
                                </div>
                            
                                <div className='Following'>
                                {story.date}
                                    <br />
                                    <p>Visited on</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
              ))}
        </div>
        

        
        </div>
    </div>
  );
}

export default UserProfilePage;
