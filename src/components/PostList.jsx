import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import ErrorMessage from "./ErrorMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const serverData = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        console.log("got from server")
      });
  };

  return (
    <>
      {postList.length === 0 && <ErrorMessage serverData={serverData} />}
      
      <div className="posts-container">
        
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
      </div>
    </>
  );
};

export default PostList;
