import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
function CustomApp() {
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
              <h1 className="mb-4">Custom Desktop Application </h1>
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
                    <span>Software Services</span>
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
            <h2 className="fw-bold">Custom Desktop Application Development</h2>
            <p>
              Desktop applications are standalone software programs that run directly on personal computers or workstations without relying on a web browser. Unlike web-based solutions, these applications provide <strong>faster performance, better security, and local data storage</strong> within your company’s infrastructure.
            </p>
            <p>
              At 7Heaven Technology, we specialize in custom-built desktop applications that cater to various industries, offering solutions such as:
            </p>
            <ul className="list-unstyled">
              <li>🔹 Custom ERP (Enterprise Resource Planning) Systems</li>
              <li>🔹 CRM (Customer Relationship Management) Software</li>
              <li>🔹 Billing & Invoicing Applications</li>
              <li>🔹 Inventory Management Solutions</li>
              <li>🔹 Task & Workflow Management Systems</li>
            </ul>
            <p>
              Our desktop solutions ensure high security, fast processing speeds, and seamless integration with your existing systems. We also offer on-premises server solutions, reducing reliance on external networks.
            </p>
            <p>
              Looking for a custom software solution?  
            </p>
          </div>

          <div className="col-md-5 text-center">
            <img
              src="/img/custom.jpg"
              alt="Structured Cabling"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </div>
            {/* First Section */}
            <section className="section">
        <div className="content-wrapper d-lg-flex align-items-center mb-5">
          <div className="text-section">
            <h2>Custom Desktop Applications</h2>
            <p>
              A desktop application is a standalone software program designed to run on a personal computer without relying on a web browser. Unlike cloud-based applications, desktop applications function independently of an internet connection and store data locally or within a company’s internal server. These applications are known for their stability, security, and high performance, making them ideal for businesses that require fast, reliable, and customizable solutions.
            </p>
            <h2>Our Desktop Application Development Services:</h2>
            <ul>
              <li>ERP (Enterprise Resource Planning) to streamline business operations</li>
              <li>CRM (Customer Relationship Management) for customer data management</li>
              <li>Billing & Invoicing Software for financial transactions</li>
              <li>Inventory Management Systems for tracking stock levels</li>
              <li>Task Management Applications for project coordination</li>
            </ul>
          </div>
          <div className="image-section me-lg-5 mb-4 mb-lg-0">
            <img src="/img/custom1.jpg" alt="Desktop Application" className="img-fluid rounded" />
          </div>
        </div>

        <div className="content-wrapper d-lg-flex align-items-center mb-5">
          <div className="image-section me-lg-5 mb-4 mb-lg-0">
            <img src="/img/custom2.jpg" alt="Key Features" className="img-fluid rounded" />
          </div>
          <div className="text-section">
            <h2>Key Features of Desktop Applications:</h2>
            <ul className="no-bullets">
              <li>✅ Offline Functionality: Runs without an internet connection.</li>
              <li>✅ High Performance: Optimized for speed and efficiency.</li>
              <li>✅ Data Security: Stores data locally, reducing security risks.</li>
              <li>✅ Customization: Tailored to meet business-specific needs.</li>
              <li>✅ Scalability: Can be integrated with cloud-based solutions.</li>
            </ul>
          </div>
        </div>
      </section>
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
                                      <option value="Software Service">Custom Desktop Applications</option>
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
                                  <button className="btn" type="submit" id="sendMessageButton"disabled={isLoading} > {isLoading ? "Submitting..." : "GET QUOTE"}</button>
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

export default CustomApp;
