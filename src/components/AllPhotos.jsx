import React,{useEffect, useState} from 'react';
import mongoosy from 'mongoosy/frontend';
const { User, Photo } = mongoosy;
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';
import { LeakAddTwoTone } from '@material-ui/icons';



const Photos = () => {
    const [allPhotos, setAllPhotos]=useState([]);
    let [photoDescription, setPhotoDescription]=useState('');
    let [count, setCount]=useState(0)
    let description='';
    
    const getAllPhotos=async ()=>{
        let photos=await Photo.find();
        console.log(photos);
        setAllPhotos(photos)
    }

    useEffect(() => {
        getAllPhotos();
    }, [])

    
    const handleLikes=()=>{
        count++;
        setCount(count);
        console.log(`icon is clicked ${count} times`)
    }

    return (
        <div>
             {allPhotos.map(photo =><div key={photo.url}>
                <h4>created by: {photo.authorName}</h4>
                <img src={'/uploads/' + photo.url} style={{width:'90%'}}/>
                <ThumbUpIcon onClick={handleLikes}/>
                <DeleteIcon />
                <span>{count} likes </span>
                <p>Description: {photo.description}</p>
                <form>
                    <input 
                    type="text" 
                    placeholder="what's in your mind..." 
                    />
                </form>
                </div>)}
        </div>
    )
}

export default Photos
