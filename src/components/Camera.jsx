import React, { useState, useRef } from 'react';
import Webcam from "react-webcam";
import {useHistory} from 'react-router-dom'
import { useStates, useNamedContext } from 'react-easier';
import mongoosy from 'mongoosy/frontend';
const { User, Photo } = mongoosy;
import '../styleapp/upload-camera.css';

const WebcamComponent = () => <Webcam />

const videoConstraints = {
  width: 260,
  height: 200,
  facingMode: "user"
};

const Camera = ({userName}) => {
        const webcamRef = React.useRef(null);
        const [src,setSrc]=useState('');
        const g = useNamedContext('global');
        const s = useStates({
          users: [],
          chatMessage: '',
          toWhom: '',
          imageData: '',
        });
        const capturedImg=useRef();
        const history=useHistory();
        const capture = React.useCallback(
            () => {
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc)
            setSrc(imageSrc)
            },
            [webcamRef],
        );
        const uploadPhoto = async e => {
          e.preventDefault();
          if (!src) { return; }
          let photo = new Photo({
            author: g.user._id,
            url: src
          });
          await photo.save();
          console.log('hello from upload')
          g.photos=[...g.photos,photo]
          capturedImg.current.style.display='none';
          console.log(capturedImg.current)
          history.push('/photos')
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
        : (<img src={src} ref={capturedImg}/>)}

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
        <br />
        <form name="photoUpload" onSubmit={uploadPhoto}>
          {s.imageData && <img src={src} width="300" />}
          <input type="submit" value="Publish photo" />
        </form>
       {/* 
        <h2>Posted photos</h2>
        <div>
        {g.photos.map(photo => <div key={photo.url}>
          <img src={'/uploads/' + photo.url} style={{width:'320px', height:'250px'}}/>
          <p>By: {userName}</p>
          <FavoriteBorderIcon />
          <ThumbUpIcon />
          <form>
            <input type="text" placeholder="what do you think..."></input>
          </form>
        </div>)}
        </div>*/}

    </div>)
}

export default Camera;
