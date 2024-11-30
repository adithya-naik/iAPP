import { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { PostList } from "../store/post-list-store";
import { FaRegThumbsUp ,FaRegThumbsDown  } from "react-icons/fa";
import { PiEyesFill } from "react-icons/pi";

const Post = ({ post }) => {
  const { delPost } = useContext(PostList);

  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            onClick={() => delPost(post.id)}
            className="position-absolute top-0 start-100 translate-middle badge  bg-danger "
          >
            <IoCloseSharp />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge bg-primary hashtag">
            #{tag}
          </span>
        ))}

       <div className="my-section">
            <div className=" default-box "><span>{post.reactions.likes}</span> <span><FaRegThumbsUp /></span></div>
            <div className=" default-box "><span>{post.reactions.dislikes} </span> <span><FaRegThumbsDown /></span></div>
            <div className=" default-box "><span>{post.reactions.dislikes} </span> <span><PiEyesFill /></span> </div>
          
        </div>
      </div>
    </div>
  );
};
export default Post;
