import { createContext, useReducer } from "react";

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

const [postList,dispatch] = useReducer(reducerFunction,DEFAULT_POST_LIST)

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

const delPost = (id)=>{
  // console.log(id);
  dispatch({
    type : "DEL_POST",
    payload : {
      PostId : id,
    },
  })
}

  return <PostList.Provider value={{
    postList,
    addPost ,
    addInitialPosts,
    delPost,
  }}>{children}</PostList.Provider>;
};

export default PostListProvider;



const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: {
      likes :156,
      dislikes :33,
    },
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
    views :34,
  },
  {
    id: "2",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: {
      likes :1,
      dislikes :3,
    },
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
    views :34,
  },
];