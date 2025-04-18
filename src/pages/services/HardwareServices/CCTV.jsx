import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
function CCTV() {
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
  
    const formData = new FormData(event.target);
    formData.append("access_key", "224fd079-f731-471a-8439-6e2bd955c5c6");
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Submitted!',
          text: 'Your demo request has been submitted successfully.',
          confirmButtonColor: '#1abc9c',
        });
        event.target.reset();
        setFormData({ name: '', email: '', phone: '', review: '' }); // if using controlled inputs
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.message || 'An error occurred. Please try again.',
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="product-widget-area">
      <div className="zigzag-bottom" />
      <div className="container">
        <div
          style={{
            backgroundPosition: 'center',
            height: '25vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h1 className="mb-4">CCTV & Security Systems Installation</h1>
                <ol className="breadcrumb d-flex justify-content-center p-0 m-0">
                  <li className="breadcrumb-item">
                    <NavLink to="/" className="text-decoration-none text-dark">
                      <span>
                        <i className="bi bi-geo-alt-fill"></i>
                      </span>
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item">
                    <NavLink to="/" className="text-decoration-none text-dark">
                      <span>Home</span>
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item active">
                    <NavLink to="" className="text-decoration-none text-dark">
                      <span>Services</span>
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item active">
                    <NavLink to="" className="text-decoration-none text-dark">
                      <span>CCTV & Security Systems</span>
                    </NavLink>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-7 g-2 p-5">
              <h2 className="fw-bold">CCTV & Security Systems Installation</h2>
              <p>
                In an era where safety and security are top priorities for both residential and commercial properties, Whitehats offers expert CCTV and security system installation services tailored to your specific needs. Our goal is to ensure complete peace of mind with high-quality surveillance and monitoring solutions.
              </p>
              <h3>🎥 CCTV Surveillance Solutions</h3>
              <p>
                We offer advanced video surveillance systems that help monitor your premises in real-time, deter crime, and provide solid evidence when needed. Our offerings include:
              </p>
              <ul className="list-unstyled">
                <li>🔹 IP Cameras – High-definition cameras with internet connectivity for remote viewing.</li>
                <li>🔹 Analog Cameras – Cost-effective traditional surveillance systems.</li>
                <li>🔹 PTZ (Pan-Tilt-Zoom) Cameras – Ideal for large spaces requiring directional control.</li>
                <li>🔹 DVR & NVR Systems – Reliable storage and playback systems for recording footage.</li>
              </ul>
              <h3>🔐 Complete Security System Integration</h3>
              <p>
                We provide fully integrated security systems to protect every corner of your property:
              </p>
              <ul className="list-unstyled">
                <li>🔹 Motion Detectors & Sensors</li>
                <li>🔹 Access Control Systems – Card, biometric, or keypad entry systems.</li>
                <li>🔹 Alarm Systems – For burglary, fire, smoke, and gas detection.</li>
                <li>🔹 Remote Monitoring – View live or recorded footage from mobile or desktop devices.</li>
              </ul>
              <h3>🏢 Tailored for Every Industry</h3>
              <p>
                Our CCTV and security solutions are suitable for:
              </p>
              <ul className="list-unstyled">
                <li>🔹 Homes and Apartments</li>
                <li>🔹 Retail Shops & Malls</li>
                <li>🔹 Warehouses & Factories</li>
                <li>🔹 Educational Institutions</li>
                <li>🔹 Offices & Commercial Spaces</li>
                <li>🔹 Government and Public Buildings</li>
              </ul>
              <h3>✅ Why Choose Whitehats?</h3>
              <ul className="list-unstyled">
                <li>🔹 Professional Site Survey & Consultation</li>
                <li>🔹 Certified Technicians and Installation Experts</li>
                <li>🔹 Smartphone-Compatible Surveillance Systems</li>
                <li>🔹 High-Quality, Night-Vision & Weatherproof Cameras</li>
                <li>🔹 Maintenance & Post-Installation Support</li>
                <li>🔹 Scalable Systems – Expand as your security needs grow.</li>
              </ul>
              <h3>🔧 Our Process</h3>
              <ul className="list-unstyled">
                <li>🔹 Assessment & Consultation – Understand your needs and survey the site.</li>
                <li>🔹 System Design – Recommend optimal camera placements and configurations.</li>
                <li>🔹 Installation & Setup – Expert installation with minimal disruption.</li>
                <li>🔹 Testing & Training – Ensure systems are operational and train users.</li>
                <li>🔹 Ongoing Support – Remote assistance and maintenance available.</li>
              </ul>
              <h3>📞 Protect What Matters Most</h3>
              <p>
                Whether you're looking to secure your home or business, Whitehats delivers the right mix of technology, experience, and support. Contact us today to get a quote or schedule a free security consultation.
              </p>
            </div>

            <div className="col-md-5 text-center">
              <img
                src="/img/cctv-1.jpg"
                alt="CCTV & Security Systems"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="contact my-4 text-center">
          <h4 className="py-3">"Have a project in mind? Let’s bring your idea to life—click the button below to get started."</h4>
          <div className="container">
            <div className="col-md-7">
              <div className="contact-form bg-light">
                <div id="success"></div>
                <form name="sentMessage" onSubmit={onSubmit} id="contactForm" noValidate="novalidate">
                  <div className="control-group">
                    <input type="text" className="form-control" id="name" name='name' placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input type="email" className="form-control" id="email" name='email' placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                    <p className="help-block text-danger"></p>
                  </div>

                  {/* Service Category Dropdown */}
                  <div className="control-group ">
                    <select className="form-control" id="serviceCategory" name="serviceCategory" required="required">
                      <option value="CCTV & Security Systems">CCTV & Security Systems</option>
                    </select>
                    <p className="help-block text-danger"></p>
                  </div>

                  <div className="control-group">
                    <input type="text" className="form-control" id="subject" name='subject' placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea className="form-control" id="message" name='message' placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="text-center">
                    <button className="btn" type="submit" id="sendMessageButton" disabled={isLoading}> {isLoading ? "Submitting..." : "GET QUOTE"}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CCTV;
