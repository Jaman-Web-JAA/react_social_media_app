import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({posts,handleEdit, editBody, setEditBody,editTitle, setEditTitle}) => {
    const {id} = useParams();
    const post = posts.find(post=>(post.id).toString() ===id);
    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post,setEditTitle,setEditBody])
    return (
      <main className="NewPost">
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
              <label htmlFor="editTitle">Edit Title:</label>
              <input id="editTitle" type="text" required value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}></input>
              <label htmlFor="editBody">Edit Post:</label>
              <textarea id="editBody" required value={editBody} onChange={(e)=>setEditBody(e.target.value)}/>
              <button type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
          </form>
      </main>
    )
  }
  

export default EditPost