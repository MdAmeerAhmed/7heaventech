import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
    <div className="footer-top-area">
    <div className="zigzag-bottom" />
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="footer-about-us">
            <h2>
              7<span>Heaven</span> Technology
            </h2>
            <p>
              Our headquarters is at JLT, Dubai, UAE. With a perfect ratio of
              experienced and new teammates, we are having signature products
              for the ever growing market of UAE. With cloud based solutions, we
              are finding customers all around the world.
              <br />
              <span>
                {" "}
                With absolute dedication, we are finding new ways to tackle
                business problems through quality software.
              </span>{" "}
            </p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/profile.php?id=100019035215405"
                target="_blank"
              >
                <i className="bi bi-facebook" />
              </a>
              <a
                href="https://plus.google.com/u/1/109043784206309792225"
                target="_blank"
              >
                <i className="bi bi-youtube" />
              </a>
              <a
                href="https://www.linkedin.com/in/7heaven-technology-dmcc-326370146/"
                target="_blank"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-menu">
            <h2 className="footer-wid-title">User Navigation </h2>
            <ul>
              <li>
                <Link href="#">User Login</Link>
              </li>
              <li>
                <Link to="/all-products">Products</Link>
              </li>
              <li>
                <Link to="/software-services">Software Services</Link>
              </li>
              <li>
                <Link to="/hardware-services">Hardware Services</Link>
              </li>
              <li>
                <Link to="/media-services">Design Services</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-menu">
            <h2 className="footer-wid-title">Products</h2>
            <ul>
              <li>
                <Link to="/property-management">
                  Property/Rental Manager Software
                </Link>
              </li>
              <li>
                <Link to="/inventory-management">Inventory Management</Link>
              </li>
              <li>
                <Link to="/property-crm">Property CRM</Link>
              </li>
              <li>
                <Link to="/maid-service">Maid Management Software</Link>
              </li>
              <li>
                <Link to="/work-order">Work Order Management</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-newsletter">
            <h2 className="footer-wid-title">Newsletter</h2>
            <p>
              Sign up to our newsletter and get exclusive deals you wont find
              anywhere else straight to your inbox!
            </p>
            <div className="newsletter-form">
              <input type="email" placeholder="Type your email" />
              <input type="submit" defaultValue="Subscribe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom-area">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="copyright">
            <p>
              ©7Heaven Technology. All Rights Reserved.{" "}
              <a href="Privacypolicy.html">Privacy and Policy</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Footer