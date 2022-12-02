import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
export const Navbar = () => {
    
    return (
        
    
        <div className="navBar" onClick={() => window.scroll(0, 0)}>
            <header>
                <NavLink to ="/" className="navBarLink">
                    Home
                </NavLink>
                <NavLink to ="/Movies" className="navBarLink">
                    Movies</NavLink>
            </header>
                 <Suspense fallback={<div>Loading...</div>}>
                 <Outlet /></Suspense>
        </div>
        
      
    )

  }