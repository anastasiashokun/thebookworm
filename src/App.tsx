import {  RouterProvider } from 'react-router-dom'
import useRouter from './hooks/router/useRouter'

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
  
  body {
    font-family: 'Josefin Sans', sans-serif;
  }
`;

function App() {
    
  const Router = useRouter()
  return (
    <>    
    <GlobalStyle/>
     <RouterProvider router={Router}/> 
    </>
  )
}

export default App
