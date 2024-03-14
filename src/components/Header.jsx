/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

import {  SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
const Header = () => {
  return (
    <header className="showcase ">
      <div className="showcase-top">
        <Link className="logo" to="/">
           <img  style={{width:"170px",}} src="https://i.ibb.co/r5krrdz/logo.png" alt="Netflix" />
        </Link>
      <SignedOut>
          
             <Link to="/sign-in" className="btn btn-rounded sign-inbtn">
                Sign In
             </Link>
          
      </SignedOut>
        <SignedIn>
           <UserButton />
        </SignedIn>
      </div>
      <div className="showcase-content">
        <h1 style={{whiteSpace:"nowrap"}}>See what's next</h1>
       
        <p>Watch anywhere. Cancel Anytime</p>
      <SignedOut>
        <Link to="/sign-up" className="btn btn-xl">
          Watch Free For 30 Days   
        </Link>
        </SignedOut>
        <SignedIn>
        <Link to="/watch-movies" className="btn btn-xl">
           Enter now  
        </Link>
        </SignedIn>
      </div>
     
    </header>
  );
};

export default Header;
