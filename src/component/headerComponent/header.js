import React from "react";
import "./header.css";

function Header() {
  // return (
  //   <div className="container headerWrraper">
  //     <img src="/logo.png" alt="React Image" />
  //     <div className="subHeader">
  //       <div className="navMenu">
  //         <ul>
  //           <li>Home</li>
  //           <li>About Us</li>
  //           <li>Services</li>
  //           <li>Work</li>
  //           <li>Blog</li>
  //           <li>Careers</li>
  //         </ul>
  //       </div>
  //       <button className="headerBtn">Let’s Talk</button>
  //     </div>
  //   </div>
  // );
  return (
    <nav className="navbar navbar-expand-lg navbarMainWrraper">
      <div className="container headerWrraper">
        <img src="/logo.png" alt="React Image" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="subHeader">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbarWrraper">
              <ul className="navbar-nav mr-auto">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Work</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <button className="headerBtn">Let’s Talk</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
