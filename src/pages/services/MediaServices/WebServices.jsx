import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
function WebServices() {
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
                <h1 className="mb-4">Web Media</h1>
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
                      <span>Web Media</span>
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
              <h2 className="fw-bold">Web Media</h2>
              <p>
                Web media refers to the digital assets and platforms you fully control—your website, blog, downloadable resources, and branded content. Unlike paid or earned media, web media gives you complete freedom over what is published, how it looks, and when it's updated. It’s your brand’s official voice on the internet, allowing you to deliver targeted messages, showcase your services or products, and build lasting trust with your audience.
              </p>
              <p>
                Owning web media means you can create content that aligns perfectly with your business goals—whether it’s detailed blog posts, company updates, downloadable e-books, white papers, portfolios, case studies, or even multimedia presentations. These assets help educate your audience, improve your SEO rankings, and convert casual visitors into loyal customers. Plus, they reflect your brand’s values, tone, and identity consistently across all platforms.
              </p>
              <p>
                At 7Heaven Technology, we help businesses build and manage powerful web media strategies—from designing sleek websites and user-friendly blogs to creating rich digital content like brochures, infographics, and downloadable guides. We focus on engaging design, content structure, and technical SEO to ensure your owned media becomes your strongest marketing and lead generation channel.
              </p>
              <h3>🌐 What is Web Media?</h3>
              <p>
                Web media includes all digital content you fully control, such as your website, blog, e-books, white papers, presentations, and downloadable assets.
              </p>
              <p>
                It gives you complete authority over your brand's message, allowing you to publish, edit, and delete content anytime without third-party restrictions.
              </p>
              <p>
                Strong web media enhances your SEO performance, builds brand credibility, supports lead generation, and helps you establish a consistent and professional online presence.
              </p>
              <h3>✅ Our Web Media Services</h3>
              <p>
                At 7Heaven Technology, we design and manage comprehensive web media strategies—covering site creation, content writing, SEO optimization, and user experience design to help you reach and retain your target audience effectively.
              </p>
            </div>

            <div className="col-md-5 text-center">
              <img
                src="/img/web-media.jpg"
                alt="Web Media"
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
                      <option value="Web Media">Web Media</option>
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
export default WebServices;
