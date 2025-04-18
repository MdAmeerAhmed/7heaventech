import React from "react";
import { Link,NavLink } from "react-router-dom";
import Swal from 'sweetalert2'
const MediaServices = () => {
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
      title: "Web Media",
      description:
        "Web media, or owned media, describes channels you control. It’s the content you create for your website and blog as well as e-books, white papers, presentations, etc. You fully control the content and its distribution. (If you can add, edit, and delete the content, you probably own it.)",
      img: "/img/media1.jpg",
      reverse: false,
      link:"/media-services/webServices"
    },
    {
      title: "Brochure, Posters & Packet Designing",
      description:
        "We have an experienced graphic designing team who can design brochures, posters and packets for the promotion of your brand. Starting from logo, font, colour combinations and signature letters, we do everything. We look into the customer segment you are focussing on, the feeling you want to project, and design accordingly.We also do content writing for the brochures and posters. We create slogans, campaign words and campaign concepts for your brand. ",
      img: "/img/media2.jpg",
      reverse: true, // image on left, text on right
      link:"/media-services/Brochure"
    },
    {
      title: "SEO & Social Media Marketing",
      description:
        "Social media is an important part of life nowadays. Targetted marketing helps companies to create marketing campaigns that reach the accurate customers. This yields maximum output for the investment we are doing in marketing activities. The most important part of social media campaigns is that you can define the targetted customer segment and area. It is sure the campaign will bring you results.Creating quality content for the media and repeating the campaign enough number of times to create an impression in the customer mind is an art that has to be done with great care and focus. We are good at it. ",
      img: "/img/media3.jpg",
      reverse: false,
      link:"/media-services/seo"
    },
  ];

  return (
    <>
        <div className="product-widget-area">
        <div className="zigzag-bottom" />
    <div className="container mt-2">
    <div       style={{
       
        backgroundPosition: "center",
        height: "25vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="mb-4">Media Services </h2>

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
                                <span>Media Services</span>
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
            <h4 className="py-3">"Have a project in mind? Let’s bring your idea to life—click the button below to get started."</h4>
          <div className="container">
              <div className="col-md-7">
                  <div className="contact-form">
                      <div id="success"></div>
                      <form name="sentMessage" id="contactForm" noValidate="novalidate">
                          <div className="control-group">
                              <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                              <p className="help-block text-danger"></p>
                          </div>
                          <div className="control-group">
                              <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                              <p className="help-block text-danger"></p>
                          </div>
                          
                          {/* Service Category Dropdown */}
                          <div className="control-group ">
                              <select className="form-control" id="serviceCategory" required="required">
                                  <option value="">Select Service Category</option>
                                  <option value="Software Service">Web Media</option>
                                  <option value="Hardware Service">Brochure, Posters & Packet Designing</option>
                                  <option value="Design Service">SEO & Social Media Marketing</option>
                              </select>
                              <p className="help-block text-danger"></p>
                          </div>
      
                          <div className="control-group">
                              <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                              <p className="help-block text-danger"></p>
                          </div>
                          <div className="control-group">
                              <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                              <p className="help-block text-danger"></p>
                          </div>
                          <div className="text-center">
                              <button className="btn" type="submit" id="sendMessageButton"> GET QUOTE</button>
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

export default MediaServices;
