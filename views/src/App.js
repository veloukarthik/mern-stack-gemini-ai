import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Prompts from './Components/Prompts';
import React from 'react';
// import Login from './Components/Login';
// import Register from './Components/Register';
// import NotFound from './Components/NotFound';
// import PromptsResponse from './Components/PromptResponse';
// import PromptResponse from './Components/PromptResponse';
import './App.css'
const PromptResponse = React.lazy(() => import('./Components/PromptResponse'));
const Register = React.lazy(() => import('./Components/Register'));
const Login = React.lazy(() => import('./Components/Login'));
const NotFound = React.lazy(() => import('./Components/NotFound'));
const PromptsResponse = React.lazy(() => import('./Components/PromptResponse'),5000);



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
      },
      {
        path: "/*",
        component: NotFound
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
      },
      {
        path: "/*",
        Component: NotFound
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
