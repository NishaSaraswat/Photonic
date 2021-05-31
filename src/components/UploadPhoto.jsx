import React, { useEffect, useRef } from 'react';
import { Style, useStates, useNamedContext } from 'react-easier';
import {useHistory} from 'react-router-dom'
import mongoosy from 'mongoosy/frontend';
const { User, Photo } = mongoosy;
import '../styleapp/upload-camera.css'
import placeholder from '../styleapp/icons/imageplaceholder.jpeg'
import Header from './Header';
import TagsInput from './TagsInput';


const UploadPhotoPage=()=>{
  const g = useNamedContext('global');
  const s = useStates({
    users: [],
    imageData: '',
    tags:'',
    description:'',
    posted: '',
    likes:[]
  });
  const chosenImg=useRef()
  const placeholderPhoto=useRef()
  const history = useHistory();
  
  const getUsers = async () => {
    s.users = await User.find();
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
  const handleDescriptionChange=(e)=>{
    s.description=e.target.value;
}
  const handleTagsChange=(e)=>{
  s.tags=e.target.value;
}

  const uploadPhoto = async e => {
    e.preventDefault();
    if (!s.imageData) { return; }
    let photo = new Photo({
      author: g.user._id,
      authorName:g.user.name,
      url: s.imageData,
      description:s.description,
      tags:s.tags,
      likes:s.likes.length
    });
    let result=await photo.save();
    g.photos=[...g.photos,photo]
    console.log(s.likes)
    chosenImg.current.style.display='none';
    history.push('/photos');
  }
return (
  <div className='upload-photo-wrapper'>
     
      <form name="photoUpload" onSubmit={uploadPhoto} className="upload-form">
        <div className="upload-field">
            <label htmlFor="files" className="upload-field-label">Upload +</label>
            <input name="file" type="file" id="files"
              accept="image/*" onChange={photoChosen} style={{display:'none'}} className="upload-input"/>
           
          </div>
        {s.imageData && <img src={s.imageData} width="300" ref={chosenImg} className="upload-image"/>}
        {!s.imageData && <img src={placeholder} alt="placeholder" ref={placeholderPhoto} className="upload-placeholder"/>}
        <div className="description-field">
          <input
            name="description" 
            placeholder="what's in your mind..."
            onChange={handleDescriptionChange}
            className="description-input"
          />
        </div>
        <div className="description-field">
          <input
            name="tags" 
            placeholder="tags"
            onChange={handleTagsChange}
            className="tags-input"
          />
        </div>
        <button type="submit" className="upload-button">Publish</button>
      </form>
  </div>
 )
}

export default UploadPhotoPage;