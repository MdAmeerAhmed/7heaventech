import React, { useEffect, useState } from 'react';
import "../App.css";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className={`mainmenu-area sticky-top ${scrolled ? "bg-secondary" : ""}`}>
        <div className="container" style={{ height: "70px" }}>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid pt-0">

              {/* Logo */}
              <Link to="/" className="navbar-brand">
                <img
                  src="img/logo-white.png"
                  alt="Logo"
                  style={{ height: "50px", marginLeft: "2px" }}
                />
              </Link>

              {/* Toggle Button */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Navbar Items */}
              <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                <ul className="navbar-nav ms-auto">

                  <li className="nav-item">
                    <NavLink className="nav-link" exact="true" to="/">Home</NavLink>
                  </li>

                  {/* Products Dropdown */}
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle text-white"
                      to="/all-product"
                      id="navbarDropdownProducts"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Products
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownProducts">
                      <li><Link className="dropdown-item" to="/all-product">All Products</Link></li>
                      <li><Link className="dropdown-item" to="/property-management">Property Management</Link></li>
                      <li><Link className="dropdown-item" to="/property-crm">Property CRM</Link></li>
                      <li><Link className="dropdown-item" to="/property-broker">Property Broker</Link></li>
                      <li><Link className="dropdown-item" to="/work-order">Work Order Management</Link></li>
                      <li><Link className="dropdown-item" to="/inventory-management">Inventory Management</Link></li>
                      <li><Link className="dropdown-item" to="/maid-service">Maid Service Management</Link></li>
                      <li><Link className="dropdown-item" to="/electronic-service">Electronic Service Center Management</Link></li>
                      <li><Link className="dropdown-item" to="/auto-garage">Autogarage Service Center Management</Link></li>
                    </ul>
                  </li>

                  {/* Services Dropdown */}
                  <li className="nav-item dropdown ">
                    <NavLink className="nav-link dropdown-toggle text-white" to="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/software-services">Software Services</Link></li>
                      <li><Link className="dropdown-item" to="/hardware-services">Hardware Services</Link></li>
                      <li><Link className="dropdown-item" to="/media-services">Media Services</Link></li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/career">Careers</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
