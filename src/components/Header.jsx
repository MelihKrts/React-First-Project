import { useState } from "react";
import Logo from "../assets/images/logo.png";
import {HashLink as Link} from "react-router-hash-link"
import { BrowserRouter } from "react-router-dom";
export default function Header() {

  return (
    <BrowserRouter>
        <header className="w-full fixed bg-teal-400 z-10 top-0">
      <nav className="container mx-auto">
        <div className="w-full flex justify-center items-center">

          <div className="w-1/6">
            <a href="/index">
              <img src={Logo} alt="Logo" title="Logo" className="pb-2 mt-2 flex justify-center items-center mx-auto" />
            </a>
          </div>

          <div className="w-5/6  flex justify-end text-white">
          <Link to='#howTo' smooth className="mr-2">
            How To
          </Link>
          <Link to='#teams' smooth className="mr-2">
            Teams
          </Link>
          <Link to='#blog' smooth className="mr-2">
            Blog's
          </Link>
          <Link to='#customer' smooth className="mr-2">
            Customer 
          </Link>
          <Link to='#contact-us' smooth className="mr-2">
            Contact Us
          </Link>
          </div>


        </div>
      </nav>
    </header>
    </BrowserRouter>

  );
}
