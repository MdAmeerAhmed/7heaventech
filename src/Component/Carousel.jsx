import React from 'react'
import 'animate.css';
import "../css/owl.carousel.css";
import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from 'react-router';
function Carousel() {
  return (
     <>
         <div className="slider-area">
      <div className="zigzag-bottom" />
      <div
        id="slide-list"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        {/* Indicators */}
        {/* <ol className="carousel-indicators slide-indicators">
          <li data-bs-target="#slide-list" data-bs-slide-to="0" className="active" />
          <li data-bs-target="#slide-list" data-bs-slide-to="1" />
          <li data-bs-target="#slide-list" data-bs-slide-to="2" />
        </ol> */}

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active animate__animated animate__fadeIn">
            <div className="single-slide">
              <div className="slide-bg slide-one" />
              <div className="slide-text-wrapper">
                <div className="slide-text">
                  <div className="container" >
                    <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="slide-content text-center">
                          <h2>Property Management Software</h2>
                          <p>
                            Our key product is property management software for real estate
                            companies, leasing companies, and broker firms. It includes ERP
                            capabilities tailored for the UAE market.
                          </p>
                          <a href="/property-management" className="readmore">
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item animate__animated animate__fadeIn">
            <div className="single-slide">
              <div className="slide-bg slide-two" />
              <div className="slide-text-wrapper ">
                <div className="slide-text">
                  <div className="container">
                    <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="slide-content text-center">
                          <h2>CRM Tool for Brokers</h2>
                          <p>
                            A software solution to manage and maintain marketing leads, assign
                            tasks, send emails, and handle sales funnels.
                          </p>
                          <a href="/property-crm" className="readmore">
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item animate__animated animate__fadeIn">
            <div className="single-slide">
              <div className="slide-bg slide-three" />
              <div className="slide-text-wrapper">
                <div className="slide-text">
                  <div className="container" >
                    <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="slide-content text-center">
                          <h2>Web Development Services</h2>
                          <p>
                            We create custom web applications, ERP, CRM, e-commerce sites,
                            mobile apps, and other tailored solutions.
                          </p>
                          <a href="/software-services" className="readmore">
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <a className="carousel-control-prev" href="#slide-list" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#slide-list" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
    {/* End of Carousel */}
    <div className="promo-area">
    <div className="zigzag-bottom" />
    <div className="container">
      <div className="row ">
        <div className="col-md-3 col-sm-6">
          <div className="single-promo ">
            <a href="software-services">
              {" "}
              <i className="bi bi-code" />
              <p>Software Development</p>
            </a>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="single-promo ">
            <a href="all-product">
              {" "}
              <i className="bi bi-server" />
              <p>Software Products</p>
            </a>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="HardwareServices.php"> </a>
          <div className="single-promo ">
            <a href="hardware-services">
              <i className="bi bi-plug" />
              <p>Hardware Products</p>
            </a>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="single-promo ">
            <a href="all-product">
              <i className="bi bi-gift" />
              <p>New products</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
     </>
  )
}

export default Carousel