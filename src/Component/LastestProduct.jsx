import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
function LastestProduct() {
    const products = [
        {
          img: "img/product-1.jpg",
          link: "PropertyManagementSoftware.php",
          title: "Property Management Software",
        },
        {
          img: "img/product-2.jpg",
          link: "propertycrm.php",
          title: "Property CRM",
        },
        {
          img: "img/product-3.jpg",
          link: "propertybroker.php",
          title: "Property Broker Management",
        },
        {
          img: "img/product-4.jpg",
          link: "workorder.php",
          title: "Work Order Management",
        },
        {
          img: "img/product-5.jpg",
          link: "Maidservice.php",
          title: "Maid Service Management",
        },
        {
          img: "img/product-7.jpg",
          link: "Autocarservice.php",
          title: "Electronic Service Center Management",
        },
        {
          img: "img/product-8.jpg",
          link: "Autocarservice.php",
          title: "Autocar Service Center Management",
        },
        {
          img: "img/product-5.jpg",
          link: "Centraldoc.php",
          title: "Centralized Document Management",
        },
        {
          img: "img/product-9.jpg",
          link: "Inventoryman.php",
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
                          <a href={product.link} className="add-to-cart-link" style={{textDecoration:"none"}}>
                            <i className="bi bi-smile" /> Book Demo
                          </a>
                          <a href={product.link} className="view-details-link" style={{textDecoration:"none"}}>
                            <i className="bi bi-link" /> See details
                          </a>
                        </div>
                      </div>
                      <div className="card-body text-center">
                        <h2 className="card-title">
                          <a style={{textDecoration:"none"}} href={product.link}>{product.title}</a>
                        </h2>
                        <div className="product-carousel-price">
                          <a
                            style={{ color: "#1abc9c", fontWeight: "bold" ,textDecoration:"none"}}
                            href={product.link}
                          >
                            More Details...
                          </a>
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