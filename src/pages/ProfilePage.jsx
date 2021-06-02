import React from 'react'
import AvatarCamera from '../components/AvatarCamera'

import '../styleapp/upload-camera.css';
import mongoosy from 'mongoosy/frontend';
const { Photo } = mongoosy;
import { useState, useEffect } from "react";
import {
    useParams
  } from "react-router-dom";

const ProfilePage = () => {
 const [use, setAuthor] = useState({})
    const {id} = useParams()
     
    useEffect(() => {
       getSingleAuthorId(id);
     }, []);
     
     
    const getSingleAuthorId = async(userId) => {
     
       const author = await Photo.find({author:userId}).populate('author')
        setAuthor(author)
       console.log(author)
     
    }
    

import Footer from '../components/Footer'
import HeaderAllPages from '../components/HeaderAllPages'
import '../styleapp/upload-camera.css'


    return (
    <div >
        <HeaderAllPages/>

        <div className="profile-wrapper">


           <h1>{use.authorName}</h1>
           <AvatarCamera />
           
    </div>
    
    )
}

            <AvatarCamera />

        </div>

        <Footer/>

    </div>)}


export default ProfilePage
