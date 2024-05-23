import React, { useContext, useEffect, useState } from "react";
import { Post } from "./Post";
import { PostList as PostListData } from "../store/postliststore";
import { WelcomeMsg } from "./WelcomeMsg";
import { LoadingSpinner } from "./LoadingSpinner";
export const Postlist = () => {
  const { postlist , addInitialPosts } = useContext(PostListData);
  const [ fetching, setfetching ] = useState(false);
  useEffect(() => {
    setfetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfetching(false);  
      });
      return () =>{
        console.log("Cleaning Up UseEffect");
      };
  }, []);
  return (
    <>
    {fetching && <LoadingSpinner/>}
      {!fetching && postlist.length == 0 && <WelcomeMsg />}
      {!fetching && postlist.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
