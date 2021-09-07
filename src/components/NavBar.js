import React from 'react'
import {NavLink} from 'react-router-dom'
function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"  exact activeClassName=" text-white" className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-white text-4xl font-bold cursive tracking-widest">
                        Amit
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-blue-200 bg-blue-700" className="inline-flex items-center py-3 px-3 my-6 text-blue-200 hover:text-white text-4xl  rounded">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-blue-200 bg-blue-700" className="inline-flex items-center py-3 px-3 my-6 text-blue-200 hover:text-white text-4xl rounded">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-blue-200 bg-blue-700" className="inline-flex items-center py-3 px-3 my-6 text-blue-200 hover:text-white text-4xl rounded">
                        About Me
                    </NavLink>
                    
                </nav>
            </div>
            
        </header>
    )
}

export default NavBar
