import React, { useEffect, useRef } from 'react';
import { Style, useStates, useNamedContext } from 'react-easier';
import {Link} from 'react-router-dom'
import mongoosy from 'mongoosy/frontend';
const { User, Photo } = mongoosy;
import { Card } from '@material-ui/core';

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
  let today=new Date();
  let timeNow= today.getHours() + ":" + today.getMinutes()

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
  }

  const uploadPhoto = async e => {
    e.preventDefault();
    if (!s.imageData) { return; }
    let photo = new Photo({
      author: g.user._id,
      url: s.imageData,
      tags: 'nature',
      description: 'lalalala',
    });
    await photo.save();
    console.log('hello from upload')
    g.photos=[...g.photos,photo]
    chosenImg.current.style.display='none';
  }
return (
  <Card>
      <h2>Upload photo</h2>
      <form name="photoUpload" onSubmit={uploadPhoto}>
        <input name="file" type="file"
          accept="image/*" onChange={photoChosen} />
          {s.imageData && <img src={s.imageData} width="300" ref={chosenImg}/>}
          <a href='/photos'><input type="submit" value="Publish photo" /></a>
      </form>

   {/* <h2>All photos</h2>
    <Photos 
      photos={g.photos}
      time={timeNow}
      userName={userName}
      />

    {g.photos.map(photo =><div key={photo.url}>
      <img src={'/uploads/' + photo.url} style={{width:'90%'}}/>
      <h5>{photo.url}</h5>
      <h5>created by: {userName}</h5>
      <span>{timeNow}</span>
      <FavoriteBorderIcon />
      <ThumbUpIcon />
      <form onSubmit={submitComment}>
        <input onChange={commentInput} type="text" placeholder="what do you think..."></input>
      </form>
    </div>)}*/}


  </Card>
 )
}

export default UploadPhotoPage;