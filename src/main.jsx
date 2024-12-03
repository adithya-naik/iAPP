import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost from './components/CreatePost.jsx';
import PostList from './components/PostList.jsx';
import Profile from './components/Profile.jsx';
import Settings from './components/Settings.jsx';
import Features from './components/Features.jsx';
import About from './components/About.jsx';

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
      {
        path : "/profile",
        element : <Profile />
      },
      {
        path : "/settings",
        element : <Settings />
      },
      {
        path : "/features",
        element : <Features />
      },
      {
        path : "/about",
        element : <About />
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
