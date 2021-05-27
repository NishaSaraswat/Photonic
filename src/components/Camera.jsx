import React, { useState, useRef } from 'react';
import Webcam from "react-webcam";
import {useHistory} from 'react-router-dom'
import { useStates, useNamedContext } from 'react-easier';
import mongoosy from 'mongoosy/frontend';
const { User, Photo } = mongoosy;
import '../styleapp/upload-camera.css';

const WebcamComponent = () => <Webcam />

const videoConstraints = {
  width: 100+'%',
  height: 100+'%',
  facingMode: "user"
};

const Camera = ({userName}) => {
        const webcamRef = React.useRef(null);
        const [src,setSrc]=useState('');
        const g = useNamedContext('global');
        const s = useStates({
          users: [],
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
          history.push('/homepage')
        }
     
  return (
    <div>
        {src==''
        ? (<Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="camera"
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
          {s.imageData && <img src={src} width="300" className="captured-photo"/>}
          <button type="submit" className="upload-button">Publish</button>
        </form>

    </div>)
}

export default Camera;
