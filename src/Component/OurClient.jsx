import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
function OurClient() {
    const clients = [
        "services_logo__1.jpg",
        "services_logo__2.jpg",
        "services_logo__3.jpg",
        "services_logo__4.jpg",
        "services_logo__5.jpg",
        "services_logo__6.jpg",
        "services_logo__7.jpg",
        "services_logo__8.jpg",
        "services_logo__9.jpg",
        "services_logo__10.jpg",
        "services_logo__11.jpg",
        "services_logo__12.jpg",
        "services_logo__13.jpg",
        "services_logo__14.jpg",
        "services_logo__15.jpg",
        "services_logo__16.jpg",
        "services_logo__17.jpg",
        "services_logo__18.jpg",
        "services_logo__19.jpg",
        "services_logo__20.jpg",
        "services_logo__21.jpg"
      ];
  return (
    <>
      <div className="brands-area">
    <div className="zigzag-bottom" />
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="brand-wrapper">
            <h2 style={{ marginBottom: 10 }} className="section-title">
              Our Clients
            </h2>
            <p style={{ textAlign: "center", fontSize: 18, color: "#1abc9c" }}>
              UAE Region
            </p>
            <section id="clients" className="clients section">
      <div className="container swiper-div">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 4000 }}
          slidesPerView={"auto"}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 3, spaceBetween: 10 },
            640: { slidesPerView: 4, spaceBetween: 10 },
            992: { slidesPerView: 6, spaceBetween: 10 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <img
                src={`/img/${client}`}
                className="swiper-slide-img"
                alt={`Client ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default OurClient