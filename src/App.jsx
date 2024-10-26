import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppLayout from './AppLayout'
import About from './pages/About'
import Careerguidance from './pages/Careerguidance'
import Home from './pages/Home'
import Careerguidance11_12 from "./pages/Careerguidance11_12";
import Careerguidanceafter from "./pages/Careerguidanceafter";

const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'career-guidance-for-9th-and-10th',
          element: <Careerguidance />
        },
        {
          path: 'career-guidance-for-11th-and-12th',
          element: <Careerguidance11_12 />
        },
        {
          path: 'career-guidance-after-graduation',
          element: <Careerguidanceafter />
        }
      ]
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
