import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';

import toast, { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import { router } from './Router/Router';



function App() {
  return (
    <div className="App max-w-screen-2xl mx-auto "  >
      <RouterProvider router={ router}></RouterProvider>
      <Toaster> </Toaster>
    </div>
  );
}

export default App;
