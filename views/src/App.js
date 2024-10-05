import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Prompts from './Components/Prompts';
import Login from './Components/Login';
import Register from './Components/Register';
import PromptResponse from './Components/PromptResponse';
import './App.css'
import PromptsResponse from './Components/PromptResponse';

function App() {
  const token = localStorage.getItem('token');
  let router;
  if (!token) {
    router = createBrowserRouter([
      {
        path: "/",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      }
    ]);
  }
  else {
    router = createBrowserRouter([
      {
        path: "/",
        Component: PromptsResponse
      },
      {
        path: "/p/:id",
        Component: PromptResponse
      }
    ]);
  }
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
