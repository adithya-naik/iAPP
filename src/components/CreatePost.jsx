import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  // as useNavigate is a hook we have to define inside a component
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const viewsElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    // to prevent the default behaviour i.e dont submit it to the server, i have to define my owm desired code
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const likes = likesElement.current.value;
    const dislikes = dislikesElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const views = viewsElement.current.value;

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    likesElement.current.value = "";
    tagsElement.current.value = "";
    viewsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: {
          likes: likes,
          dislikes: dislikes,
        },
        views: views,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((postToServerRecievedFromServer) => {
        addPost(postToServerRecievedFromServer);
        navigate("/");
      });
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here <span className="text-danger">*</span>
        </label>
        <input
          required
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title <span className="text-danger">*</span>
        </label>
        <input
          required
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content<span className="text-danger">*</span>
        </label>
        <textarea
          required
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="views" className="form-label">
          Number of Views<span className="text-danger">*</span>
        </label>
        <input
          required
          type="text"
          ref={viewsElement}
          className="form-control"
          id="views"
          placeholder="How many people viwed this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="likes" className="form-label">
          Number of likes<span className="text-danger">*</span>
        </label>
        <input
          required
          type="text"
          ref={likesElement}
          className="form-control"
          id="likes"
          placeholder="How many people liked this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dislikes" className="form-label">
          Number of dislikes<span className="text-danger">*</span>
        </label>
        <input
          required
          type="text"
          ref={dislikesElement}
          className="form-control"
          id="dislikes"
          placeholder="How many people disliked this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here<span className="text-danger">*</span>
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
