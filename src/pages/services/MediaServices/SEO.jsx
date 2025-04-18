import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
function SEO() {
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
                <h1 className="mb-4">SEO & Social Media Marketing</h1>
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
                      <span>SEO & Social Media Marketing</span>
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
              <h2 className="fw-bold">SEO & Social Media Marketing</h2>
              <p>
                In today's digital-first world, having a strong online presence is no longer optional — it's essential. At 7Heaven Technology, we help businesses of all sizes maximize their visibility through strategic Search Engine Optimization (SEO) and Social Media Marketing (SMM), ensuring your brand connects with the right audience at the right time.
              </p>
              <h3>📊 Why SEO & Social Media Matter</h3>
              <p>
                SEO improves your website’s visibility on search engines like Google, driving organic traffic and increasing your chances of being found by potential customers.
              </p>
              <p>
                Social Media Marketing enables direct engagement with your audience on platforms like Facebook, Instagram, LinkedIn, and Twitter — helping build trust, boost awareness, and increase conversions.
              </p>
              <h3>✅ Our SEO Services Include:</h3>
              <ul className="list-unstyled">
                <li>🔹 <strong>On-Page SEO Optimization:</strong> Keyword integration, meta tag creation, image optimization, and internal linking.</li>
                <li>🔹 <strong>Off-Page SEO & Link Building:</strong> Creating high-quality backlinks through ethical strategies to improve your domain authority.</li>
                <li>🔹 <strong>Technical SEO:</strong> Ensuring your website loads fast, is mobile-friendly, and properly indexed.</li>
                <li>🔹 <strong>Local SEO:</strong> Optimizing your business for local search results and Google Maps listings to attract nearby customers.</li>
                <li>🔹 <strong>SEO Audits & Reporting:</strong> Monthly performance tracking and continuous improvements using tools like Google Analytics, Search Console, and SEMrush.</li>
              </ul>
              <h3>🚀 Our Social Media Marketing Services:</h3>
              <ul className="list-unstyled">
                <li>🔹 <strong>Social Media Strategy Development:</strong> Tailored campaigns that reflect your brand voice and meet your marketing goals.</li>
                <li>🔹 <strong>Paid Advertising Campaigns:</strong> Targeted Facebook, Instagram, LinkedIn & YouTube ads with specific demographic and geographic filters to get maximum ROI.</li>
                <li>🔹 <strong>Content Creation & Management:</strong> Engaging posts, videos, and reels designed to educate, entertain, and convert.</li>
                <li>🔹 <strong>Hashtag Research & Trend Monitoring:</strong> Maximizing reach and engagement with well-researched hashtags and up-to-date trends.</li>
                <li>🔹 <strong>Community Management:</strong> Responding to comments, messages, and creating engagement with your followers.</li>
              </ul>
            </div>

            <div className="col-md-5 text-center">
              <img
                src="/img/seo-2.jpg"
                alt="SEO & Social Media Marketing"
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
                      <option value="SEO & Social Media Marketing">SEO & Social Media Marketing</option>
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

export default SEO;
