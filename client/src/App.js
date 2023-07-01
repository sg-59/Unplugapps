import Home from "./Pages/Home";
import Print from "./Pages/Print";
import './Pages/style.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'print',
    element:<Print/>
  },
])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
