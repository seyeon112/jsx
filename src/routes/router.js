import { createBrowserRouter } from "react-router-dom";
import Job from "../pages/intro/Job";

const router = createBrowserRouter ([
  {
    path : "/",
    element : <Layout />,
    children : [
      
    ]
  },
  {
    path : "/intro",
    element : <Intro/>
  },
  {
    path : "/job",
    element : <Job/>,
    children : [
      {
        path : ":title",
        element : <Job />
      }
    ]
  },
  {
    path : "*",
    element : <NotFound/>    
  }

])

export default router;