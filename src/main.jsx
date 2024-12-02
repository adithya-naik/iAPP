import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost from './components/CreatePost.jsx';
import PostList from './components/PostList.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    // this is being my default path for evryone which include header,footer,sidebar
    // anyone among the child is rendered based on the path
    element : <App />,
    children : [
      {
        path : "/",
        element : <PostList />
      },
      {
        path : "/create-post",
        element : <CreatePost />
      },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
