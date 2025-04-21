import React from "react";
// import "../App.css"; // Ensure you create this CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/product-hover.css";
import { Link } from "react-router";

const cards = [
  {
    title: "Software Services",
    items: [
      { img: "img/customdesktopapp.jpg", name: "Custom Desktop Applications", link: "/software-services/custom-desktop-app" },
      { img: "img/webhost.jpg", name: "Custom Web Applications; Migration to cloud", link: "/software-services/web-applications" },
      { img: "img/mobileapps.jpg", name: "Mobile Applications", link: "/software-services/mobile-applications" },
    ],
  },
  {
    title: "Hardware Services",
    items: [
      { img: "img/server1.jpg", name: "Server & Networking Services", link: "HardwareServices.php" },
      { img: "img/cctv.jpg", name: "CCTV & Security Systems Installation", link: "HardwareServices.php" },
      { img: "img/biometeric1.jpg", name: "Biometric Device Installation", link: "HardwareServices.php" },
    ],
  },
  {
    title: "Designing Services",
    items: [
      { img: "img/webdesign.jpg", name: "Web Designing", link: "MediaServices.php" },
      { img: "img/Brochure1.jpg", name: "Brochure, Posters & Packet Designing", link: "MediaServices.php" },
      { img: "img/socialmedia.jpg", name: "Social Media Content", link: "MediaServices.php" },
    ],
  }
];

const ServiceCards = () => {
  return (
    <div className="product-widget-area">
      <div className="zigzag-bottom" />
      <div className="bg-light py-5">
        <div className="text-center">
          <h2>Comprehensive IT Services for Seamless Operations</h2>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
                <p className="fs-5">
                  From structured cabling to managed IT services, we provide expert support to ensure your business runs smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-4 px-5">
          {cards.map((cardCategory, categoryIndex) => (
            <div className="row mt-4" key={categoryIndex}>
              <div className="col-12">
                <h3 className="service-title text-center">{cardCategory.title}</h3>
              </div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
                {cardCategory.items.map((item, itemIndex) => (
                  <div className="col" key={itemIndex}>
                    <div className="card shadow text-center" style={{ backgroundColor: "#525557" }}>
                      <div className="single-products" style={{ position: 'relative' }}>
                        <div className="products-f-image card-img-top">
                          <img
                            src={item.img}
                            className="img-fluid mt-2"
                            style={{
                              width: "100%",
                              height: "250px",
                              objectFit: "cover"
                            }}
                            alt={item.name}
                          />
                          <div className="products-hover" style={{ border: "1px solid #ddd" }}>
                            <Link to={item.link} className="view-details-link" style={{ textDecoration: "none" }}>
                              <i className="bi bi-link" /> Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <h3 className="card-title text-white" style={{ fontSize: "14px", margin: "0", padding: "2px" }}>
                          {item.name}
                        </h3>
                        <Link to={item.link} className="requirement-link">Enter Requirements</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
