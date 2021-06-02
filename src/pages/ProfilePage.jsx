import React from 'react'
import AvatarCamera from '../components/AvatarCamera'
import '../styleapp/upload-camera.css';
import mongoosy from 'mongoosy/frontend';
import HeaderAllPages from '../components/HeaderAllPages';
// import '../styleapp/Footer.css';
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
        <AvatarCamera/>
      {profile && photos && photos.map((phot) =>(

        <div className="profile-wrapper">

           <h1>{profile.name}</h1> 

              
           <img src={phot.url}/>
        
        
           
    </div>
))}


</>)


}         
export default ProfilePage

