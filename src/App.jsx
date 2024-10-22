import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Main from './layout/main';
import Home from './components/Home/Home';
import About from './components/About/About';
import UserDetails from './components/UserDetails/UserDetails';




function App() {
  
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element: <About></About>,
        loader: async ()=>{
          return await fetch("https://jsonplaceholder.typicode.com/users")
        }
      },
      {
        path: "/details/:id",
        element:<UserDetails></UserDetails>,
        loader: async ({ params }) =>{
          return await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`
          );
        },
      },
    ],
  },
 ]);
  return <div>
    <RouterProvider router={router}></RouterProvider>
  </div>;
      
}

export default App
