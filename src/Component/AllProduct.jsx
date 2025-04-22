import React from 'react';
import "../css/product-hover.css"
import { Link } from 'react-router';
function AllProduct() {
    const products = [
      {
        name: "Property Management Software",
        link: "/property-management",
        img: "img/product-1.jpg",
      },
      {
        name: "Property CRM Software",
        link: "/property-crm",
        img: "img/product-2.jpg",
      },
      {
        name: "Property Broker Management Software",
        link: "/property-broker",
        img: "img/product-3.jpg",
      },
      {
        name: "Work Order Management Software",
        link: "/work-order",
        img: "img/product-4.jpg",
      },
      {
        name: "Maid Service Management Software",
        link: "/maid-service",
        img: "img/product-5.jpg",
      },
      {
        name: "Electronic Service Center Management",
        link: "/electronic-service",
        img: "img/product-7.jpg",
      },
      {
        name: "Autogarage Service Center Management Software",
        link: "/auto-garage",
        img: "img/product-8.jpg",
      },
      {
        name: "Centralised Document Management",
        link: "/centralised-document",
        img: "img/product-6.jpg",
      },
      {
        name: "Inventory Management Software",
        link: "/inventory-management",
        img: "img/product-9.jpg",
      },
    ];
  
    return (
      <div className="product-widget-area">
      <div className="zigzag-bottom" />
        <div className="product-big-title-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
        </div>
  
        <div className="single-product-area">
          <div className="container">
            <div className="product-bit-title text-center">
              <h1>Products from 7Heaven Technology</h1>
              <p>Software tools for business</p>
            </div>
  
            <div className="row">
              {products.map((product, index) => (
                <div key={index} className="col-md-3 col-sm-6">
                  <div className="single-shop-product">
                  <div className="products-f-image card-img-top">
                      <img src={product.img} alt={product.name} className="product-img" />
                      <div className="products-hover">
                        <Link to="contact" className="book-demo-btn">Book Demo</Link>
                      </div>
                    </div>
                    <h4>
                      <Link style={{ color: "black" }} to={product.link}>{product.name}</Link>
                    </h4>
                    <div className="product-carousel-price">
                      <Link to={product.link} >View Details</Link>
                    </div>
                  </div>
                </div>
              ))}
              {[
    { name: "Mall Management Software", date: "Coming Soon" },
    { name: "HR and Payroll Management", date: "Releasing on November 2024" },
    { name: "Facility Management", date: "Releasing on December 2024" },
  ].map((product, index) => (
    <div key={index} className="col-md-3 col-sm-6 d-flex justify-content-center">
      <div className="single-shop-product">
        <div className="product-upper position-relative">
          <img src="img/product-11.jpg" alt={product.name} className="product-img" />
        </div>
        <h4 className="text-center">
          <Link to="#">{product.name}</Link>
        </h4>
        <div className="product-carousel-price text-center">
          <p>{product.date}</p>
        </div>
      </div>
    </div>
  ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default AllProduct; 