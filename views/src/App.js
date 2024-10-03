import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Prompts from './Components/Prompts';
import Login from './Components/Login';
import Register from './Components/Register';
import PromptResponse from './Components/PromptResponse';
import  './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Prompts
    },
    {
      path: "/login",
      Component:Login
    },
    {
      path: "/register",
      Component:Register
    },
    {
      path: "/prompt/:id",
      Component:PromptResponse
    }
  ]);

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
