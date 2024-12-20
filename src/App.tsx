import { RouterProvider } from 'react-router-dom';
import useRouter from './hooks/router/useRouter';
import { createGlobalStyle } from 'styled-components';
import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
  
  body {
    font-family: 'Josefin Sans', sans-serif;
  }
`;

function App() {
  const Router = useRouter();
  const size = useWindowSize();

  useEffect(() => {
    console.log(`Width: ${size.width}, Height: ${size.height}`);
  }, [size]);

  return (
    <>    
      <GlobalStyle />
      <RouterProvider router={Router}/> 
    </>
  );
}

export default App;
