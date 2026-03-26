import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Accueil from './pages/Accueil'
import Contacts from './pages/Contacts'
import Projets from './pages/Projets'
import NotFound from './pages/NotFound'



function App() {
  
   const Router = createBrowserRouter([

    //  nos routes
    { element : <Layout/> ,
      children: [
            { path:"/" , element: <Accueil/> },
            { path:"/contact" , element: <Contacts/> },
            { path:"/projets" , element: <Projets/> },
      ]
    },
    { path:"*" , element: <NotFound/> },
   

   ])

   
  return (
     <RouterProvider  router={Router} />
  )
}

export default App
