
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import FriendDetail from './components/FriendDetail';
import Friends from './components/Friends';
import Home from './components/Home';
import Main from './LayOut/Main';

function App() {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },

        /* Loader use Data Load */

        {
          path: '/friends',
          element: <Friends />,
          loader: async () => { return fetch(`https://jsonplaceholder.typicode.com/users`) },
        },

        /* Dynamic Route */

        {
          path: 'friend/:friendId',
          element: <FriendDetail />,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          }
        }
      ]
    },


  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
