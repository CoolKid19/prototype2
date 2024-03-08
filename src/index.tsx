import React, { useContext } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Components/Root';
import { ProjectsDetailContext } from './context/CardContext';
import Home from './Components/Home';
import SecondPage from './Components/SecondPage';
import Error from './Components/Error';

const Index = () => {

    const projectDetail = useContext(ProjectsDetailContext)
  
    let pages = [ {path: '/', element: <Home/>} , {
      path: `/:id`,
      element: <SecondPage />, 
    }];
      
      console.log(pages);
    
      const router = createBrowserRouter([
        {
          path: '/',
          element: <Root />,
          errorElement: <Error />,
          children: pages
        },
       
      ])

      // Error Boundary testing code 

      // const undefinedVariable: any = undefined;
      // console.log(undefinedVariable.nonExistentProperty);
  
  
    return (
    
      <RouterProvider router = {router} />
    
  )
}

export default Index
