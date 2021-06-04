import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React,{ useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import mongoosy from 'mongoosy/frontend';
import '../styleapp/comments.css';


const {
    Message, Login
} = mongoosy;

//OLD CODE
const Comments = () => {

    const history = useHistory();
    const { id, user, url, name } = useParams();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect( () => {
        const interval = setInterval(() => {
            
          }, 1000);
          return () => clearInterval(interval);
    },[comments]);

    const addComment = async () => {

        if( newComment === '' )
        { return; }
        comments.push({
                id: comments.length,
                id_Post: id,
                user: user,
                comment: newComment
            });
            let loginuser = await Login.check();
            console.log(loginuser);
            let newMessage = new Message ({
                text: newComment, author: loginuser._id
                //Message.find({author.userId})...populate('author')
            }) 
            await newMessage.save();
            console.log(newMessage);
        setNewComment('');
    }

    return(
        <div className="container_com">
            <div className="container_body">
                <div className="div_image_com">
                    <img 
                        className="imagen_com"
                        src={'/uploads/' + url}                    
                        alt="picture"
                    />
                </div> 
                <div className="comments">
                    {
                        comments.length===0?
                        <p style={{color:'white'}}>Comments</p>
                        :
                        comments.map( item => 
                            <div className="comments_list" key={item.id}> 
                                <h4 className="userName">{name}</h4> 
                                <p>{item.comment}</p>                        
                            </div>
                        )            
                    } 
                    <div className="comments_input">
                        <input
                            className="input_com"
                            type="text"
                            value={newComment}
                            onChange={ (event) => setNewComment( event.target.value ) }
                            placeholder="Write a Comment"
                            autoFocus
                        />                    
                        <Button className="btn_com" onClick={ () => addComment() }> Send </Button>
                    
                        <Link className="back_com" to={"/homepage"}>
                            <ArrowBackIosIcon color="secondary"  title="Back"/>
                        </Link>
                    
                    </div>
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