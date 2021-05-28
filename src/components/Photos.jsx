import React,{useEffect, useState} from 'react';
import mongoosy from 'mongoosy/frontend';
const { User, Photo } = mongoosy;
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import DeleteIcon from '@material-ui/icons/Delete';



const Photos = () => {
    const [allPhotos, setAllPhotos]=useState([]);
    const getAllPhotos=async ()=>{
        let photos=await Photo.find();
        console.log(photos);
        setAllPhotos(photos)
    }
    useEffect(() => {
        getAllPhotos();
    }, [])
    return (
        <div>
             {allPhotos.map(photo =><div key={photo.url}>
                <h5>created by: {photo.auther}</h5>
                <img src={'/uploads/' + photo.url} style={{width:'90%'}}/>
                <h5>{photo.url}</h5>
                <FavoriteBorderIcon />
                <ThumbUpIcon />
                <DeleteIcon />
                <form>
                    <input type="text" placeholder="what do you think..."></input>
                </form>
    </div>)}
        </div>
    )
}

export default Photos
