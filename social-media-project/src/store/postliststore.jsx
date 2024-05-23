import { createContext, useReducer } from "react";
export const PostList = createContext({
  postlist: [],
  addpost: () => {},
  deletepost: () => {},
  addInitialPosts:()=>{},
});
const postlistreducer = (curpostlist =[], action) => {
  let newPostList = curpostlist;
  if (action.type === "DELETE_POST") {
    newPostList = curpostlist.filter(
      (post) => post.id !== action.payload.postid
    );
  }
  else if (action.type === "ADD_INITIAL_POST") {
    newPostList =action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...curpostlist];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postlist, dispatchpostlist] = useReducer(postlistreducer, []);
  const addpost = (useridval, titleval, bodyval, reacionsval, tagsval) => {
    dispatchpostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: titleval,
        body: bodyval,
        reactions: reacionsval,
        userId: useridval,
        tags: tagsval,
      },
    });
  };
  const addInitialPosts = (posts) =>{
    dispatchpostlist({
      type:"ADD_INITIAL_POST",
      payload:{
        posts,
      }
    })
  }
  const deletepost = (postid) => {
    dispatchpostlist({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };
  return (
    <PostList.Provider
      value={{ postlist,addInitialPosts, addpost, deletepost }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
