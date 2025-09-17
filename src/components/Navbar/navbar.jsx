import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
const Navbar = ({ onSignupClick }) => {
  const[ToMenu ,setIomenu] = useState(false)

  return (
    <nav className="flex items-center justify-between ">

      <img src="./src/assets/1.png" className="w-30 h-30 relative right-5 bottom-4"  />
      <div className="hidden lg:block">
         <ul className="flex items-center relative bottom-5 gap-10 overflow-hidden border-0 shadow-sm rounded-4xl p-1">
 
             <li className="hover:bg-blue-600 p-2 pr-3 pl-3  rounded-3xl hover:text-white font-normal hover:text-md">
                <Link to="/home">Home</Link>
             </li>
 
              <li className="hover:bg-blue-600 p-2 pr-3 pl-3  rounded-3xl hover:text-white font-normal hover:text-md">
                <Link to="/assets">Assets</Link>
             </li>
 
              <li className="hover:bg-blue-600 p-2 pr-3 pl-3  rounded-3xl hover:text-white font-normal hover:text-md">
                <Link to="/features">Features</Link>
             </li>
 
              <li className="hover:bg-blue-600 p-2 pr-3 pl-3  rounded-3xl hover:text-white font-normal hover:text-md">
                <Link to="/pricing">Pricing</Link>
             </li>
 
              <li className="hover:bg-blue-600 p-2 pr-3 pl-3  rounded-3xl hover:text-white font-normal hover:text-md">
                <Link to="/protection">Protection</Link>
             </li>
         </ul>
      </div>
      <div className="hidden lg:block">
         <button type="button" className="hover:bg-black item-center hover:text-white font-bold m-1 p-2 pl-4 pr-4 
              relative bottom-5 rounded-3xl hover:cursor-pointer">Login</button>
          <button type="button" className="hover:bg-black item-center hover:text-white font-bold m-1 p-2 pl-4 pr-4 
              relative bottom-5 rounded-3xl hover:cursor-pointer"
              onClick={onSignupClick}
              >Sign up</button>
      </div>
  


      <div className="block lg:hidden">
         <IoMenu fontSize={27} onClick={()=> setIomenu(true)} className="relative bottom-5"/>

         {ToMenu && 
             <div className="fixed inset-0 flex flex-col items-baseline-last">
               <div className="bg-white p-6 rounded-lg shadow-lg w-70 h-100">
                 <ImCancelCircle fontSize={27}  onClick={() => setIomenu(false)}/>
                 <div>
                    <ul className="flex flex-col mt-8">

                        <li className="hover:bg-blue-600 rounded-full p-2 text-center hover:scale-115 transition-transform ">
                           <Link to="/home">Home</Link>
                        </li>

                        <li className="hover:bg-blue-600 rounded-full p-2 text-center hover:scale-115 transition-transform">
                           <Link to="/assets">Assets</Link>
                        </li>

                        <li className="hover:bg-blue-600 rounded-full p-2 text-center hover:scale-115 transition-transform">
                           <Link to="/features">Features</Link>
                        </li>

                        <li className="hover:bg-blue-600 rounded-full p-2 text-center hover:scale-115 transition-transform">
                           <Link to="/pricing">Pricing</Link>
                        </li>

                        <li className="hover:bg-blue-600 rounded-full p-2 text-center hover:scale-115 transition-transform">
                           <Link to="/protection">Protection</Link>
                        </li>

                    </ul> 
                 </div>
                 <div className="flex flex-col mt-5">
                    <button type="button" className="hover:bg-black  hover:text-white font-bold m-1 p-2 pl-4 pr-4 
                          rounded-3xl hover:cursor-pointer">Login</button>
                     <button type="button" className="hover:bg-black item-center hover:text-white font-bold m-1 p-2 pl-4 pr-4 
                          rounded-3xl hover:cursor-pointer"
                         onClick={onSignupClick}
                         >Sign up</button>
                 </div>
               </div>
             </div>
         }
      </div>

    </nav>
  );
};

export default Navbar;
