import { createContext, useCallback, useReducer,useState ,useEffect} from "react";

export const PostList = createContext({
  postList : [],
  fetching : false,
  addPost : ()=>{},
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
const [fetching, setFetching] = useState(false);




const addInitialPosts = (posts)=>{
  dispatch({
    type : "ADD_INIT_POST",
    payload : {
      posts:posts,
    },
  })
}
const addPost = (post)=>{
  dispatch({
    type : "ADD_POST",
    payload : post,
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


// gets the initial posts whwn evr the post-lists-store renders for single time
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;
  setFetching(true);
  fetch("https://dummyjson.com/posts",{signal})
    .then((res) => res.json())
    .then((data) => {
      addInitialPosts(data.posts);
      setFetching(false);
    });
    return ()=>{
      controller.abort(); 
    }
}, []);



  return <PostList.Provider value={{
    postList,
    addPost ,
    fetching,
    delPost,
  }}>{children}</PostList.Provider>;
};

export default PostListProvider;




// {
//   id: 2,
//   title: "Paas ho bhai",
//   body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
//   reactions: {
//     likes :1,
//     dislikes :3,
//   },
//   userId: 12,
//   tags: ["Graduating", "Unbelievable"],
//   views :34,
// },