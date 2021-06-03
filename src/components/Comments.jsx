import { Button } from '@material-ui/core';
import React,{ useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
//import { modelName } from '../../backend/models/Comment';


const Comments = () => {
/*
    const savedComment = new modelName({
        id: '',
        idPost: '',
        comment: '',
        user: ''
    });*/
    const history = useHistory();
    const { id, user, url } = useParams();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect( () => {
        const interval = setInterval(() => {
          }, 1000);
          return () => clearInterval(interval);
    },[comments]);

    const addComment =  () => {

        if( newComment === '' )
        { return; }
        comments.push({
                id: comments.length,
                id_Post: id,
                user: user,
                comment: newComment
            });      
        setNewComment('');
    }

    return(
        <div  style={{color:'white', paddingTop:'15px', width:'95%'}}>
            <div  style={{ display:'flex', justifyContent:'center'}}>
                <img 
                    style={{ borderRadius:'50%', width:"200px", height: '200px'}}                
                    src={'/uploads/' + url}
                    
                    alt="picture"
                />
            </div> 
            <div style={{display:'flex', justifyContent:'center'}}>
                {
                    comments.length===0?
                    <p style={{color:'white'}}>Not match</p>
                    :
                    comments.map( item => 
                        <div key={item.id} style={{ paddingBottom:'30px', background:'#ffff', color:'#0000'}}> 
                            <h4 style={{display:'block'}}>{item.user}</h4> 
                            <p>{item.comment}</p>                        
                        </div>
                    )            
                }
                <input  
                    style={{backgroundColor:'rgb(190, 184, 184)', color:'black'}}
                    type="text"
                    value={newComment}
                    onChange={ (event) => setNewComment( event.target.value ) }
                    placeholder="Write a Comment"
                    autoFocus
                />
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button onClick={ () => addComment() }> Add Comment </Button>
                    <Link to={"/homepage"}>Back</Link>
                </div>
            </div>           


        </div>
    )
}

export default Comments;

// style={{color:'white', paddingTop:'15px', width:'95%'}} first

// style={{ display:'flex', justifyContent:'center'}} second

//src= {'/uploads/' + url}
//className="post-image"
//"https://miro.medium.com/max/11520/1*MKkufG0eyT0IQ5wZ70qKxQ.jpeg"