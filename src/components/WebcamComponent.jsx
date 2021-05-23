import React, { Component, useState } from 'react';
import Webcam from "react-webcam";
import { Style, useStates, useNamedContext } from 'react-easier';
import mongoosy from 'mongoosy/frontend';
const { User, Photo } = mongoosy;


const WebcamComponent = () => <Webcam />

const videoConstraints = {
  width: 260,
  height: 200,
  facingMode: "user"
};

const WebcamCapture = () => {
        const webcamRef = React.useRef(null);
        const [src,setSrc]=useState('');
        const g = useNamedContext('global');
        const s = useStates({
          users: [],
          chatMessage: '',
          toWhom: '',
          imageData: '',
          display: null
        });
      


        const capture = React.useCallback(
            () => {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc)
            setSrc(imageSrc)
            },
            [webcamRef],
        );

        const recapture= React.useCallback(
          
        )

        /*
        let savedPhotosSrc=[]; 
        const uploadPhoto = e => {
          e.preventDefault();
          savedPhotosSrc=[...savedPhotosSrc, src.slice(5)]
          console.log(savedPhotosSrc)
        }*/
        const uploadPhoto = async e => {
          e.preventDefault();
          // If no photo chosen do nothing
          if (!src) { return; }
          // Create a new Photo
          let photo = new Photo({
            // (we are not using tag and description fields yet)
            author: g.user._id,
            url: src
          });
          await photo.save();
          console.log('hello from upload')
          g.photos=[...g.photos,photo]
        }
        
        
  return (
    <div>
        <h1>take a photo</h1>
        {src==''
        ? (<Webcam
          audio={false}
          height={200}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={260}
          videoConstraints={videoConstraints}
          />)
        : (<img src={src} />)}

          {src!=''
          ?
            (<button onClick={(e)=>
            {
            e.preventDefault();
            setSrc('')
            }}
            className="webcam-btn">
            Retake Image</button>)
            :
            (<button onClick={(e)=>{
            e.preventDefault();
            capture()}}
          className="webcam-btn">Capture</button>)
          }  
        <img src={src} alt="token picture" />
        <br />
        <form name="photoUpload" onSubmit={uploadPhoto}>
          {s.imageData && <img src={src} width="300" />}
          <input type="submit" value="Publish photo" />
        </form>
         
        <h2>Posted photos</h2>
        <div>
        {g.photos.map(photo => <div key={photo.url}>
          <img src={'/uploads/' + photo.url} />
          <p>By: {photo.author.name}</p>
        </div>)}
        </div>

    </div>)
}

export default WebcamCapture