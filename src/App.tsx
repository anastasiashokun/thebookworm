import {  RouterProvider } from 'react-router-dom'
import useRouter from './hooks/router/useRouter'

function App() {

  const Router = useRouter()
  return (
    <>    
     <RouterProvider router={Router}/> 
    </>
  )
}

export default App
