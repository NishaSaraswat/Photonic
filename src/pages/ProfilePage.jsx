import React from 'react'
import AvatarCamera from '../components/AvatarCamera'
import mongoosy from 'mongoosy/frontend';
import HeaderAllPages from '../components/HeaderAllPages';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Footer from '../components/Footer';
import '../styleapp/upload-camera.css';
 import '../styleapp/Footer.css';
import '../styleapp/LogoHeader.css';
import '../styleapp/ProfilePage.css';
const { Photo, User } = mongoosy;
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const ProfilePage = () => {
  const [photos, setPhotos] = useState()
  const [profile, setProfile] = useState()
   const {id} = useParams()
    //console.log(id)

    //"60b61518865850152fa74e32"
     
    useEffect(() => {
       getSingleAuthorId(id);
     }, []);
     
     
      const getSingleAuthorId = async(userId) => {
      const photos = await Photo.find({author:userId}).populate('author')
      const author = await User.findById(userId)
        setProfile(author)
        setPhotos(photos)

       console.log(author)
       console.log(photos)
     
    }
   
    return (
   <>  

   <HeaderAllPages  />
   <title>My Posts</title>
   <AvatarCamera/>
 
      {profile && photos && photos.map((phot) =>(

        <div className="profile">

       
           <h3>{profile.name}</h3>
           <img src={phot.url}/> 
           <span><strong>Posted: </strong>{phot.posted}</span>
           <br/>
           <span><strong>Coment: </strong>{phot.description}</span> 
            <br/>
            <div className="likeIcon">
            <ThumbUpIcon/>
            </div>
        
            <br/>
            <span>{phot.likes}</span>   
           
        
           
    </div>
))}

<Footer />
</>)


}         
export default ProfilePage

