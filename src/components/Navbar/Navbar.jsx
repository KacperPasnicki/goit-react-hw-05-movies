import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
export const Navbar = () => {
    
    return (
        
    
        <span className="navBar" onClick={() => window.scroll(0, 0)}>
            
            <NavLink to ="/" className="navBarLink">
                Home
            </NavLink>
            <NavLink to ="/Movies" className="navBarLink">Movies</NavLink>
            <Suspense fallback={<div>Loading...</div>}><Outlet /></Suspense>
        </span>
        
      
    )

  }