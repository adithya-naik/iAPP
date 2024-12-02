import { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { PostList } from "../store/post-list-store";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { PiEyesFill } from "react-icons/pi";

const Post = ({ post }) => {
  const { delPost } = useContext(PostList);

  return (
    <div className="card post-card">
      <div className="card-body">
        <div>
          <button
            title="Close"
            onClick={() => delPost(post.id)}
            className="position-absolute  translate-middle badge  bg-danger x  close"
          >
            <IoCloseSharp />
          </button>
        </div>

        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge bg-primary hashtag">
            #{tag}
          </span>
        ))}

        <div className="my-section">
          <div className=" default-box ">
            <span>{post.reactions.likes}</span>{" "}
            <button title="Like" className="close like">
              <FaRegThumbsUp />
            </button>
          </div>
          <div className=" default-box ">
            <span>{post.reactions.dislikes} </span>{" "}
            <button title="Dislike" className="close dislike">
              <FaRegThumbsDown />
            </button>
          </div>
          <div className=" default-box ">
            <span>{post.reactions.dislikes} </span>{" "}
            <span>
              <PiEyesFill />
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
