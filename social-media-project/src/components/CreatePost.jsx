import React, { useContext, useRef } from "react";
import  { PostList } from "../store/postliststore";

export const CreatePost = () => {
  const {addpost}=useContext(PostList);
  const userid=useRef();
  const title=useRef();
  const body=useRef();
  const reactions=useRef();
  const tags=useRef();
  const handlesubmit=(event)=>{
    event.preventDefault();
    const useridval=userid.current.value;
    const titleval=title.current.value;
    const bodyval=body.current.value;
    const reacionsval=reactions.current.value;
    const tagsval=tags.current.value.split(" ");
    addpost(useridval,titleval,bodyval,reacionsval,tagsval);
     useridval.current.value="";
 titleval.current.value="";
 bodyval.current.value="";
 reacionsval.current.value="";
 tagsval.current.value="";
  }
  return (
    <>
      <form className="create-post" onSubmit={handlesubmit}>
      <div className="mb-3">
          <label forName="user-id" className="form-label">
            user id
          </label>
          <input
            type="text"
            ref={userid}
            className="form-control"
            id="user-id"
            placeholder="Enter Your user id"
          />
        </div>
        <div className="mb-3">
          <label forName="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            ref={title}
            className="form-control"
            id="title"
            placeholder="Enter Your Post Title"
          />
        </div>
        <div className="mb-3">
          <label forName="body" className="form-label">
            Post Content
          </label>
          <textarea
          rows="4"
          ref={body}
            className="form-control"
            id="body"
            placeholder="Enter Your Post Content"
          />
        </div>
        <div className="mb-3">
          <label forName="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="number"
            className="form-control"
            id="reacions"
            ref={reactions}
            placeholder="How Many Peoples Reacted to Your Post"
          />
        </div>
        <div className="mb-3">
          <label forName="HasTag" className="form-label">
            HasTags
          </label>
          <input
            type="text"
            ref={tags}
            className="form-control"
            id="HasTag"
            placeholder="Enter Your HasTag with space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
