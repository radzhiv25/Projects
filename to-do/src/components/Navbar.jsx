// import React from 'react' 
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-3 border-b">
        <h1 className="text-xl font-bold text-transparent bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text">Task Zen</h1>
        <ul>
            <li></li>
            <li ><FaGithub className="text-xl hover:text-green-500" /></li>
        </ul>
    </div>
  )
}

export default Navbar