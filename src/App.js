import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers/Router';

function App() {
  return (
    <div className="max-w-5xl m-auto px-5">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
