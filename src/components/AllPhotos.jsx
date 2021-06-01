import React,{useEffect, useState} from 'react';
import mongoosy from 'mongoosy/frontend';
const { User, Photo } = mongoosy;
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import LastPosted from './LastPosted'


const AllPhotos = () => {
    const [allPhotos, setAllPhotos]=useState([]);
    let [count, setCount]=useState(0)

    
    const getAllPhotos=async ()=>{
        let photos=await Photo.find();
        photos.sort((a, b) => a.posted > b.posted ? -1 : 1);
        console.log(photos);
        setAllPhotos(photos)    
    }

    useEffect(() => {
        getAllPhotos();
    }, [])

    return (
        <div>
             {allPhotos.map(photo =>
                <div key={photo._id}>
                    <h4>{photo.authorName}</h4>
                    <img src={'/uploads/' + photo.url} style={{width:'100%'}}/>
                    <FavoriteBorderIcon />
                    <span>{photo.likes} likes</span>
                    <p>{photo.authorName}: {photo.description}</p>
                    <p>{photo.tags}</p>
                    <LastPosted date={photo.posted} />
                    <DeleteIcon />
                    <hr/>     
                </div>)}
        </div>
    )
}

export default AllPhotos;
