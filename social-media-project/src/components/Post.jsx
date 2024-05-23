import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/postliststore";
export const Post = ({ post }) => {
  const {deletepost}=useContext(PostList);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletepost(post.id)}>
          <MdDelete />
            <span class="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span class="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-success reactiones">
          This Post has been Reacted By {post.reactions} Peoples.
        </div>
      </div>
    </div>
  );
};
