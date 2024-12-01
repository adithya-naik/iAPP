import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList : [],
  addPost : ()=>{},
  addInitialPosts : ()=>{},
  delPost : ()=>{},
});


const reducerFunction = (currentPostList,action)=>{
  let newPosts = currentPostList;
  if(action.type === "DEL_POST"){
    newPosts = currentPostList.filter((post)=>post.id!==action.payload.PostId);
  }
  else if(action.type === "ADD_INIT_POST"){
    newPosts = action.payload.posts;
  }
  else if(action.type === "ADD_POST"){
    newPosts = [action.payload,...currentPostList];
  }
  return newPosts;
}


const PostListProvider = ({ children }) => {

const [postList,dispatch] = useReducer(reducerFunction,[])

const addInitialPosts = (posts)=>{
  dispatch({
    type : "ADD_INIT_POST",
    payload : {
      posts:posts,
    },
  })
}
const addPost = (userId, postTitle, postBody, tags,views,likes,dislikes)=>{
  dispatch({
    type : "ADD_POST",
    payload : {
      id: Date.now(),
      title:postTitle,
      body:postBody,
      reactions: {
        likes : likes,
        dislikes : dislikes,
      },
      views: views,
      userId: userId,
      tags: tags,

    },
  })
}

// as deletePost method changes on evry render,as creates a new object of that function so to avoid that we do this

const delPost = useCallback((id)=>{
  dispatch({
    type : "DEL_POST",
    payload : {
      PostId : id,
    },
  });
},[dispatch]);

  return <PostList.Provider value={{
    postList,
    addPost ,
    addInitialPosts,
    delPost,
  }}>{children}</PostList.Provider>;
};

export default PostListProvider;




// {
//   id: "2",
//   title: "Paas ho bhai",
//   body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
//   reactions: {
//     likes :1,
//     dislikes :3,
//   },
//   userId: "user-12",
//   tags: ["Graduating", "Unbelievable"],
//   views :34,
// },