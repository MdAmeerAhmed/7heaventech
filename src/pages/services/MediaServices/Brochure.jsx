import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
function Brochure() {
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
                <h1 className="mb-4">Brochure, Posters & Packet Designing</h1>
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
                      <span>Brochure, Posters & Packet Designing</span>
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
              <h2 className="fw-bold">Brochure, Posters & Packet Designing</h2>
              <p>
                First impressions matter—and your promotional materials often serve as the first interaction customers have with your brand. At 7Heaven Technology, our creative design team brings together aesthetics, strategy, and messaging to deliver visually compelling and goal-driven designs that communicate your brand story effectively.
              </p>
              <h3>🖌️ What We Offer:</h3>
              <h4>✅ Brochure Design</h4>
              <p>
                We design informative, elegant, and easy-to-read brochures tailored to your brand’s purpose:
              </p>
              <ul className="list-unstyled">
                <li>🔹 Bi-fold, tri-fold, gate-fold or custom formats</li>
                <li>🔹 Product/service brochures</li>
                <li>🔹 Company profiles</li>
                <li>🔹 Event & exhibition brochures</li>
                <li>🔹 Interactive digital brochures for online sharing</li>
              </ul>
              <h4>✅ Poster Design</h4>
              <p>
                We create eye-catching posters that stop people in their tracks:
              </p>
              <ul className="list-unstyled">
                <li>🔹 Promotional posters for sales, events & product launches</li>
                <li>🔹 Corporate posters for internal communications</li>
                <li>🔹 Retail & shop display designs</li>
                <li>🔹 Print-ready & social media optimized versions</li>
              </ul>
              <h4>✅ Packet/Label/Box Designing</h4>
              <p>
                Our team designs attractive and practical packaging that stands out on the shelf:
              </p>
              <ul className="list-unstyled">
                <li>🔹 Food packets, electronics packaging, beauty products, etc.</li>
                <li>🔹 Label & box design for retail, e-commerce, and gifts</li>
                <li>🔹 Focus on visual hierarchy, brand visibility & customer appeal</li>
                <li>🔹 Print-friendly formats with cutter lines and bleed areas</li>
              </ul>
              <h3>🧠 Creative Strategy In Every Design</h3>
              <p>
                Design is not just about how it looks — it's also about how it feels and functions. We consider:
              </p>
              <ul className="list-unstyled">
                <li>🔹 Your target audience</li>
                <li>🔹 The message you want to convey</li>
                <li>🔹 Cultural relevance and trends</li>
                <li>🔹 Typography, iconography, and color theory</li>
                <li>🔹 Consistency with your existing brand identity</li>
              </ul>
            </div>

            <div className="col-md-5 text-center">
              <img
                src="/img/poster.jpg"
                alt="Brochure, Posters & Packet Designing"
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
                      <option value="Brochure, Posters & Packet Designing">Brochure, Posters & Packet Designing</option>
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

export default Brochure;
