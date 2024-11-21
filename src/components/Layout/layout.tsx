import React from "react"
import Footer from "./Footer/footer"
import Header from "./Header/header"

interface LayoutProps { 
    children: React.ReactNode
}

const Layout: React.FC <LayoutProps> = ({children}) => {
     console.log(children);
    return (
        <div>
          <Header/>
          <main>{children}</main>
          <Footer/>
        </div>
    ) }
    
    export default Layout