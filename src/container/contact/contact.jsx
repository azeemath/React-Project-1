import React from "react"

const Contact = () => {
    return(

      <footer className="p-5 bg-gray-800 text-white lg:w-250 lg:h-115 relative lg:left-37 rounded-2xl mt-5 ">
      <div className="lg:pl-20 pt-10">
         <h1 className="text-4xl font-semibold mb-5 text-center relative lg:right-15 bottom-5">Contact Us</h1>
         <span className="mb-5 lg:text-xl"><b>Language : </b> English</span>
         <div className="mt-5 mb-10 leading-10 lg:text-xl">
           <p><b>Address : </b>
              CarTrade Tech Limited, 12th floor, Vishwaroop IT Park, Sector 30A, Vashi, Navi Mumbai - 400705
           </p>
           <p><b>Phone : </b> (022) 6739 888 </p>
           <p><b>Email : </b> contact@carwale.com</p>
             
         </div>
         <div className="lg:flex gap-10 items-center">
            <span className="text-xl">contact with us</span>
            <div className="flex gap-5 md:flex-row mt-5" > 
               <img  src="./src/assets/github.png" alt="github icon" width="40px" className="hover:cursor-pointer"/>
               <img  src="./src/assets/instagram.png" alt="instagram icon" width="40px" className="hover:cursor-pointer"/>
               <img  src="./src/assets/twitter.png" alt="twitter icon" width="40px" className="hover:cursor-pointer"/>
               <img  src="./src/assets/whatsapp.png" alt="whatsapp icon" width="40px" className="hover:cursor-pointer"/>
            </div>
         </div>
      </div>
 </footer>
    )
}

export default Contact;