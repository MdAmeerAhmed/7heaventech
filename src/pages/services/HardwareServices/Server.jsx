import React from 'react';
import { NavLink } from 'react-router-dom';

function Server() {
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
                <h1 className="mb-4">Server & Networking Services</h1>
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
                      <span>Hardware Services</span>
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item active">
                    <NavLink to="" className="text-decoration-none text-dark">
                      <span>Server & Networking Services</span>
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
              <h2 className="fw-bold">Server & Networking Services</h2>
              <p>
                In today’s digital landscape, businesses rely heavily on robust and secure server and networking infrastructure to manage their operations, data, and communications. At Whitehats, we understand the evolving needs of organizations and offer a range of hardware-independent server and networking solutions designed to enhance productivity, ensure security, and support scalability.
              </p>
              <h3>🔒 Reliable Server Solutions</h3>
              <p>
                We provide businesses with a variety of server solutions tailored to their size, industry, and operational needs:
              </p>
              <ul className="list-unstyled">
                <li>🔹 On-Premise Servers: Ideal for businesses that require complete control over their infrastructure and data.</li>
                <li>🔹 Cloud-Integrated Servers: Combines the flexibility of cloud access with the security of local data management.</li>
                <li>🔹 Virtualized Server Environments: Efficient resource allocation using virtual machines, reducing hardware costs.</li>
              </ul>
              <h3>🌐 Advanced Networking Infrastructure</h3>
              <p>
                Networking forms the backbone of modern IT operations. We design, implement, and maintain:
              </p>
              <ul className="list-unstyled">
                <li>🔹 Local Area Networks (LAN)</li>
                <li>🔹 Wide Area Networks (WAN)</li>
                <li>🔹 Virtual Private Networks (VPN)</li>
                <li>🔹 Secure Wireless Networks (WiFi & Mesh)</li>
              </ul>
              <h3>✅ Benefits of Choosing Whitehats:</h3>
              <ul className="list-unstyled">
                <li>🔹 Hardware-Independent Configurations: Our services are compatible with a wide range of hardware environments.</li>
                <li>🔹 Centralized Management: Easily monitor and manage services from a single control panel.</li>
                <li>🔹 Highly Secure Permissions: Ensure access control and user-level security across all devices and platforms.</li>
                <li>🔹 Scalability & Flexibility: Easily scale services as your business grows without the need for infrastructure overhaul.</li>
                <li>🔹 24/7 Monitoring & Support: Our team is available round the clock to keep your systems up and running.</li>
              </ul>
              <h3>💼 Who We Serve</h3>
              <p>
                We cater to various industries, including:
              </p>
              <ul className="list-unstyled">
                <li>🔹 Corporate Enterprises</li>
                <li>🔹 Educational Institutions</li>
                <li>🔹 Government Offices</li>
                <li>🔹 Healthcare Facilities</li>
                <li>🔹 Retail and E-commerce</li>
              </ul>
            </div>

            <div className="col-md-5 text-center">
              <img
                src="/img/server-1.jpg"
                alt="Server & Networking Services"
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
                      <option value="Server & Networking Services">Server & Networking Services</option>
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

export default Server;
