import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const Navbar = () => {
      const {user,  logOut } = useContext(AuthContext);

      const handleSignOut = () =>{
        logOut()
           .then()
           .catch()

      }

    const links = <>
     <li className="text-xl"><NavLink to='/'>Home</NavLink></li>
           <li  className="text-xl"><NavLink to='/about' >About Us</NavLink></li>
           <li  className="text-xl"><NavLink to='/update'>Update Profile</NavLink></li>
           
           
           
           
           

    </>
     
    return (
        <div className="navbar bg-black  mx-auto text-orange-600  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
            </ul>
          </div>
          <img className="lg:w-24 lg:h-24 w-16 h-16 rounded-3xl lg:ml-24" src="/download (1).png" alt="" />
        </div>
    
        <div className="navbar-end lg:mr-10">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-2">
        <div className="w-12 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="/240_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg" />
        </div>
      </div>
      {
        user ?
        <button onClick={handleSignOut} className="btn btn-outline btn-accent">Sign Out</button>
        :
        <Link to='/login'>
        <button className="btn btn-outline btn-accent">Login</button>
        </Link>
      }
        
        </div>
        <div className="border-t bg-black text-white border-base-300"></div>
      </div>
      
    );
};

export default Navbar;