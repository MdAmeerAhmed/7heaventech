import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../css/TopBar.css";

const TopBar = () => {
  return (
    <>
    <div className="container-fluid bg-dark d-none d-md-flex" style={{height: "40px"}}>
      <div className="container">
        <div className="d-flex justify-content-between topbar">
          
          {/* Left: Social Media Links */}
          <div className="top-link">
            {[
              { href: "https://www.facebook.com", icon: "facebook" },
              { href: "https://www.twitter.com", icon: "twitter-x" },
              { href: "https://www.instagram.com", icon: "instagram" },
              { href: "https://www.linkedin.com", icon: "linkedin" }
            ].map((social, index) => (
                <a
                key={index}
                href={social.href}
                className="bg-dark btn btn-sm-square me-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon}
              >
                <i className={`bi bi-${social.icon}`}></i>
              </a>
              
            ))}
          </div>

          {/* Right: Contact Info */}
          <div className="top-info text-white d-flex flex-wrap justify-content-end align-items-center">
            <small className="me-3 text-White">
              <i className="bi bi-phone me-2"></i>
              Call Us: +971 50 905 4633
            </small>
            <small className="me-3 text-white">
              <i className="bi bi-envelope-fill me-2"></i>
              <a href="mailto:support@7heaventech.com" className="text-white text-decoration-none">
              support@7heaventech.com
              </a>
            </small>
            <small className="me-3">
              <a href="/register" className="text-white text-decoration-none">
                <i className="bi bi-person me-2"></i>
                Register
              </a>
            </small>
            <small className="me-3">
              <a href="/sign-in" className="text-white text-decoration-none">
                <i className="bi bi-lock-fill me-2"></i>
                SignIn
              </a>
            </small>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default TopBar;
