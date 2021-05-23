import React, { useEffect } from 'react';
import { Style, useStates, useNamedContext } from 'react-easier';
import mongoosy from 'mongoosy/frontend';
const { User, Photo } = mongoosy;

const UploadPhotoPage=()=>{
  const g = useNamedContext('global');
  const s = useStates({
    users: [],
    chatMessage: '',
    toWhom: '',
    imageData: '',
  });
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
      url: s.imageData
    });
    await photo.save();
    console.log('hello from upload')
    g.photos=[...g.photos,photo]
  }
return (
  <>
    <h2>Chat</h2>
    <form name="writeInChat">
      <label>To whom:&nbsp;
      <select {...s.bind('toWhom')}>
          {s.users
            .filter(x => x._id !== g.user._id)
            .map((x, i) => <option key={x._id}>{x.name}</option>)}
        </select>
      </label>
      <input type="text" placeholder="Message"
        {...s.bind('chatMessage')} />
      <input type="submit" value="Send" />
    </form>

    <h2>Upload photo</h2>
    <form name="photoUpload" onSubmit={uploadPhoto}>
      <input name="file" type="file"
        accept="image/*" onChange={photoChosen} />
      {s.imageData && <img src={s.imageData} width="300" />}
      <input type="submit" value="Publish photo" />
    </form>
    <hr />

    <h2>All photos</h2>
    {g.photos.map(photo => <div key={photo.url}>
      <img src={'/uploads/' + photo.url} style={{width:'320px', height:'250px'}}/>
      <p>By: {photo.author.name}</p>
    </div>)}

  </>
 )
}

export default UploadPhotoPage;