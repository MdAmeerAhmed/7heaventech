import React from 'react';
import "animate.css";

function Approach() {
  return (
    <>
      <div className="container-fluid h-auto p-4 align-items-center justify-content-center ">
        <div className="text-center px-5">
          <h1 className="fw-medium">Our Cloud Business Solutions Approach</h1>
          <p className="mx-5">
            At , we excel in delivering top-notch IT and cloud services in Dubai to businesses. Our success stems from a dedicated team and innovative strategies that simplify the process into three seamless steps:
          </p>
        </div>
        <div className="row m-5 justify-content-center gap-4">
          <div className="col-lg-3 col-md-6 animate__animated animate__bounceInLeft d-flex flex-column align-items-center text-center" style={{ borderRadius: "20px", animationDuration: "1000ms", background: "#666", padding: "20px" }}>
            {/* Icon Section */}
            <i className="bi bi-check-circle-fill text-grey fs-1 mb-3"></i>
            {/* Text Content */}
            <h3 className="fw-semibold text-white">We Understand</h3>
            <p className="mb-0 text-white">
            We collaborate with you to understand your needs and deliver tailored solutions through trusted cloud service providers in Dubai.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center text-center" style={{ borderRadius: "20px", background: "#666", padding: "20px", margin: "0px" }}>
            {/* Icon Section */}
            <i className="bi bi-check-circle-fill text-grey fs-1 mb-3"></i>
            {/* Text Content */}
            <h3 className="fw-semibold text-white">We Deliver</h3>
            <p className="mb-0 text-white">
            Leveraging advanced technologies, we provide reliable solutions with timely delivery, empowering your business to scale seamlessly.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 animate__animated animate__bounceInRight d-flex flex-column align-items-center text-center" style={{ borderRadius: "20px", animationDuration: "1000ms", background: "#666", padding: "20px", margin: "0px" }}>
            {/* Icon Section */}
            <i className="bi bi-check-circle-fill text-grey fs-1 mb-3"></i>
            {/* Text Content */}
            <h3 className="fw-semibold text-white">We Support</h3>
            <p className="mb-0 text-white">
            Our 24/7 support ensures constant access to trusted cloud service providers in UAE, keeping your operations running smoothly at all times.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Approach;
