import React from "react";
import { Link,NavLink } from "react-router-dom";
import Swal from 'sweetalert2'
const HardwareServices = () => {
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

  const services = [
    {
      title: "Server & Networking Services",
      description:
        "Every business organization has its own data, applications, services and information requirements that need to be managed. The organization can choose to get them managed inside or outside the network. Whitehats has designed different types of hardware independent solutions that can meet customers’ business requirements. They can have their services hosted in an environment with highly secure permissions. The customers can also get these services managed centrally in a fully permission-able environment. Get in touch with Whitehats to know about the different server solution options that we can provide.",
      img: "/img/Hardware1.jpg",
      reverse: false,
      link: "/hardware-services/server",
    },
    {
      title: "CCTV & Security Systems Installation",
      description:
        "Facebook, Twitter, and YouTube are examples of web applications. With the power of online access, web apps offer collaboration, analytics, and mobility. We specialize in building web applications and e-commerce solutions using platforms like Magento and WordPress with cloud hosting to reduce costs.",
      img: "/img/Hardware2.jpg",
      reverse: true, // image on left, text on right
      link: "/hardware-services/cctv",
    },
    {
      title: "Biometric Device Installation",
      description:
        "Access controls and biometric time attendance are now a major part of any small/medium/large enterprise. Huge variety of machines and brands are available in the market nowadays which has led to a greater confusion to choose what is right and what is suitable for you. At 7Heaven Technology, we take up the access control/ biometric time attendance projects with utter care and thought of meeting the client’s requirement and suggest them with the right machine and solution to meet the purpose of fixing the Time attendance/access control system. Being one of the most reputed Matrix Time Attendance and access control distributors in Dubai, we have a range of Matrix time attendance systems which allow you to easily control access to your business premises and keep records of attendance of employees for later use.",
      img: "/img/Hardware3.jpg",
      reverse: false,
      link: "/hardware-services/biometric",
    },
  ];

  return (
    <>
      <div className="product-widget-area">
        <div className="zigzag-bottom" />
        <div className="container mt-2">
          <div
            style={{
              backgroundPosition: "center",
              height: "25vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <h2 className="mb-4">Hardware Services</h2>

                  {/* Breadcrumb Navigation */}
                  <ol className="breadcrumb d-flex justify-content-center p-0 m-0">
                    <li className="breadcrumb-item">
                      <NavLink to="/" className="text-decoration-none text-dark">
                        <span>
                          <i className="bi bi-geo-alt-fill"></i>
                        </span>
                      </NavLink>
                      <meta itemProp="position" content="1" />
                    </li>
                    <li className="breadcrumb-item">
                      <NavLink to="/" className="text-decoration-none text-dark">
                        <span>Home</span>
                      </NavLink>
                      <meta itemProp="position" content="2" />
                    </li>
                    <li className="breadcrumb-item active">
                      <NavLink to="" className="text-decoration-none text-dark">
                        <span>Services</span>
                      </NavLink>
                      <meta itemProp="position" content="3" />
                    </li>
                    <li className="breadcrumb-item active">
                      <NavLink to="" className="text-decoration-none text-dark">
                        <span>Hardware Services</span>
                      </NavLink>
                      <meta itemProp="position" content="4" />
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {services.map((service, index) => (
            <div
              key={index}
              className={`row align-items-center mb-5 ${
                service.reverse ? "flex-row-reverse" : ""
              }`}
            >
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src={service.img}
                  alt={service.title}
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="col-md-6">
                <h3>{service.title}</h3>
                <p style={{ fontSize: "16px" }}>{service.description}</p>
                <Link to={service.link} className="btn btn-outline-success">
                  Learn More
                  </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="contact mt-125 text-center">
          <h4 className="py-3">
            "Have a project in mind? Let’s bring your idea to life—click the button below to get started."
          </h4>
          <div className="container">
            <div className="col-md-7 mx-auto">
              <div className="contact-form">
                <div id="success"></div>
                <form name="sentMessage" onSubmit={onSubmit} id="contactForm" noValidate="novalidate">
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                       name="name"
                      placeholder="Your Name"
                      required
                      data-validation-required-message="Please enter your name"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                       name="email"
                      placeholder="Your Email"
                      required
                      data-validation-required-message="Please enter your email"
                    />
                    <p className="help-block text-danger"></p>
                  </div>

                  {/* Service Category Dropdown */}
                  <div className="control-group">
                    <select
                      className="form-control"
                      id="serviceCategory"
                      name="serviceCategory"
                      required
                      data-validation-required-message="Please select a service category"
                    >
                      <option value="">Select Service Category</option>
                      <option value="Server & Networking Services">Server & Networking Services</option>
                      <option value="CCTV & Security Systems Installation">CCTV & Security Systems Installation</option>
                      <option value="Biometric Device Installation">Biometric Device Installation</option>
                    </select>
                    <p className="help-block text-danger"></p>
                  </div>

                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Message"
                      required
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary" type="submit" id="sendMessageButton" disabled={isLoading}>
                      {isLoading ? "Submitting..." : "GET QUOTE"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HardwareServices;
