import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
function Biometric() {
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
                <h1 className="mb-4">Biometric Device Installation</h1>
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
                      <span>Biometric Device Installation</span>
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
              <h2 className="fw-bold">Biometric Device Installation</h2>
              <p>
                In today’s fast-paced business environment, access control and biometric time attendance systems have become essential for ensuring security, productivity, and efficient workforce management. At 7Heaven Technology, we provide tailored biometric solutions that are both reliable and scalable for organizations of all sizes.
              </p>
              <h3>🔒 Why Choose Biometric Systems?</h3>
              <p>
                Biometric devices offer a high level of accuracy and security compared to traditional time-tracking and access methods. These systems eliminate buddy punching, reduce administrative workload, and streamline HR and security operations.
              </p>
              <h3>📌 Our Approach</h3>
              <p>
                With so many devices and brands available on the market, selecting the right solution can be overwhelming. That’s where we come in. We don’t just sell biometric devices — we consult, assess, and deliver the most suitable system based on your organization’s structure and workflow needs.
              </p>
              <h3>⚙️ Solutions We Offer</h3>
              <ul className="list-unstyled">
                <li>🔹 <strong>Biometric Time Attendance Systems:</strong> Automate your employee attendance and streamline payroll with fingerprint, face recognition, or card-based systems.</li>
                <li>🔹 <strong>Access Control Systems:</strong> Secure sensitive areas with customizable access permissions, real-time monitoring, and integration with alarms or surveillance systems.</li>
                <li>🔹 <strong>Multi-location Attendance Integration:</strong> Ideal for organizations with multiple branches — centralize all employee records in one dashboard.</li>
                <li>🔹 <strong>Real-Time Data Reporting & Analytics:</strong> Generate attendance logs, leave summaries, and overtime reports in real-time.</li>
              </ul>
              <h3>🛠️ Our Products Include:</h3>
              <p>
                We are one of the most trusted distributors of Matrix Biometric Devices in Dubai. Our product range includes:
              </p>
              <ul className="list-unstyled">
                <li>🔹 Matrix COSEC Fingerprint Attendance Machines</li>
                <li>🔹 Face Recognition Attendance Systems</li>
                <li>🔹 Access Control Terminals</li>
                <li>🔹 Integration with Turnstiles, Doors, & Elevators</li>
              </ul>
              <h3>📈 Benefits of Our Biometric Solutions</h3>
              <ul className="list-unstyled">
                <li>🔹 Enhanced security and monitoring</li>
                <li>🔹 Accurate attendance records</li>
                <li>🔹 Easy integration with payroll and HR software</li>
                <li>🔹 Custom reporting features</li>
                <li>🔹 Scalable systems for future expansion</li>
              </ul>
              <h3>🧑‍💼 Ideal For:</h3>
              <ul className="list-unstyled">
                <li>🔹 Corporate Offices</li>
                <li>🔹 Schools & Universities</li>
                <li>🔹 Warehouses & Industrial Units</li>
                <li>🔹 Hospitals & Clinics</li>
                <li>🔹 Government & Public Sector Institutions</li>
              </ul>
              <h3>📝 End-to-End Service</h3>
              <p>
                From consultation and device selection to installation, configuration, and training — 7Heaven Technology ensures your biometric setup is hassle-free and fully optimized for your business needs.
              </p>
            </div>

            <div className="col-md-5 text-center">
              <img
                src="/img/biometric-1.jpg"
                alt="Biometric Device Installation"
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
                      <option value="Biometric Device Installation">Biometric Device Installation</option>
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

export default Biometric;
