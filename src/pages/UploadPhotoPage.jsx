import React, { useEffect, useRef } from 'react';
import { Style, useStates, useNamedContext } from 'react-easier';
import {useHistory} from 'react-router-dom'
import mongoosy from 'mongoosy/frontend';
const { User, Photo } = mongoosy;
import '../styleapp/upload-camera.css'
import placeholder from '../styleapp/icons/keepcoding.png'
import Header from '../components/Header';
import PublishIcon from '@material-ui/icons/Publish';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

const UploadPhotoPage=({userName})=>{
  const g = useNamedContext('global');
  const s = useStates({
    users: [],
    chatMessage: '',
    toWhom: '',
    imageData: '',
    tags:'',
    description:'',
    posted: ''
  });
  const chosenImg=useRef()
  const placeholderPhoto=useRef()
  let today=new Date();
  let timeNow= today.getHours() + ":" + today.getMinutes()
  const history = useHistory();


  const getUsers = async () => {
    s.users = await User.find();
    s.display = true;
  }
  useEffect(() => getUsers(), []);

  const photoChosen = () => {
    let file = document.forms.photoUpload.file.files[0];
    if (!file) { return; }
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      s.imageData = reader.result;
    }, false);
    reader.readAsDataURL(file);
    placeholderPhoto.current.style.display="none";
  }

  const uploadPhoto = async e => {
    e.preventDefault();
    if (!s.imageData) { return; }
    let photo = new Photo({
      author: g.user._id,
      url: s.imageData,
    });
    let result=await photo.save();
    console.log(result);
    console.log('hello from upload')
    g.photos=[...g.photos,photo]
    chosenImg.current.style.display='none';
    history.push('/photos');
  }
return (
  <div className='upload-photo-wrapper'>
      {s.imageData && <img src={s.imageData} width="300" ref={chosenImg} className="upload-image"/>}
      <form name="photoUpload" onSubmit={uploadPhoto} className="upload-form">
        {!s.imageData && <img src={placeholder} alt="placeholder" ref={placeholderPhoto} className="upload-placeholder"/>}
        <div className="upload-field">
          <label htmlFor="files" className="upload-field-label">Upload</label>
          <input name="file" type="file" id="files"
            accept="image/*" onChange={photoChosen} style={{display:'none'}} className="upload-input"/>
          <button type="submit" className="upload-button">Publish</button>
        </div>
      </form>
  </div>
 )
}

export default UploadPhotoPage;
