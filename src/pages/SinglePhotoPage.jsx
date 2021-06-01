import React from 'react'
import { useState, useEffect } from "react";
import mongoosy from 'mongoosy/frontend';
const { Photo } = mongoosy;
import AvatarCamera from '../components/AvatarCamera';
import Footer from '../components/Footer'
import '../styleapp/upload-camera.css'



export default function SinglePhotoPage() {
const [image, setImage] = useState({})
let id = useParams()

useEffect(() => {
    getPhotoByUserId(id)
}, [])


const getPhotoByUserId = async ( userId)=> {
 const photos = await Photo.find({author:userId}).populate('author');

 //setImage(photos)
    console.log(photos)
}

 



   

    return (
        <>
        <AvatarCamera />
        <div>
        <h1>My Posts</h1>

       
        <strong>Author: </strong>
          {image.author} <br />
          {image.description}
          {image.posted}
         
          <img src={image.url} alt="images" />
          
        </div>
        <Footer />
        </>
    )
}



  
