import { Suspense } from "react"
import { Outlet, NavLink } from "react-router-dom"

export const Navbar = () => {
    
    return (
        
    
        <div className="layout" >
            <header className="navBar">
                <NavLink to ="/" className="navBarLink" onClick={() => window.scroll(0, 0)} end>
                    Home
                </NavLink>
                <NavLink to ="/Movies" className="navBarLink" onClick={() => window.scroll(0, 0)}>
                    Movies</NavLink>
            </header>
                 <Suspense fallback={<div>Loading...</div>}>
                 <Outlet /></Suspense>
        </div>
        
      
    )

  }