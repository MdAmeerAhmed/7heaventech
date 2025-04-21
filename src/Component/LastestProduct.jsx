import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { Link } from 'react-router';
function LastestProduct() {
    const products = [
        {
          img: "img/product-1.jpg",
          link: "/property-management",
          title: "Property Management Software",
        },
        {
          img: "img/product-2.jpg",
          link: "/property-crm",
          title: "Property CRM",
        },
        {
          img: "img/product-3.jpg",
          link: "/property-broker",
          title: "Property Broker Management",
        },
        {
          img: "img/product-4.jpg",
          link: "/work-order",
          title: "Work Order Management",
        },
        {
          img: "img/product-5.jpg",
          link: "/maid-service",
          title: "Maid Service Management",
        },
        {
          img: "img/product-7.jpg",
          link: "/electronic-service",
          title: "Electronic Service Center Management",
        },
        {
          img: "img/product-8.jpg",
          link: "/auto-garage",
          title: "Autocar Service Center Management",
        },
        {
          img: "img/product-5.jpg",
          link: "/centralised-document",
          title: "Centralized Document Management",
        },
        {
          img: "img/product-9.jpg",
          link: "/inventory-management",
          title: "Inventory Management",
        },
      ];
  return (
    <>
      <div className="maincontent-area">
      <div className="zigzag-bottom" />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="latest-product">
              <h2 className="section-title">Latest Products</h2>
              
              {/* Navigation Arrows - Moved Inside maincontent-area */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={4}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <div className="single-product card shadow-sm">
                      <div className="product-f-image card-img-top ">
                        <img src={product.img} alt={product.title} />
                        <div className="product-hover"style={{border: "1px solid #ddd"}}>
                          <Link to={product.link} className="add-to-cart-link" style={{textDecoration:"none"}}>
                            <i className="bi bi-smile" /> Book Demo
                          </Link>
                          <Link to={product.link} className="view-details-link" style={{textDecoration:"none"}}>
                            <i className="bi bi-link" /> See details
                          </Link>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <h2 className="card-title">
                          <Link style={{textDecoration:"none"}} to={product.link}>{product.title}</Link>
                        </h2>
                        <div className="product-carousel-price">
                          <Link
                            style={{ color: "#1abc9c", fontWeight: "bold" ,textDecoration:"none"}}
                            to={product.link}
                          >
                            More Details...
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
    {" "}
    </>
  )
}

export default LastestProduct