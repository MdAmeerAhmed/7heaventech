import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
function MobileApp() {
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
                <h1 className="mb-4">Mobile App Development </h1>
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
              <h2 className="fw-bold">Mobile Applications</h2>
              <p>
                Android and iOS are the two most popular mobile operating systems in the world today. At 7Heaven Technology, we specialize in building high-quality applications for both platforms tailored to meet the specific needs of your business and your users. Our development process is rooted in performance, usability, and security to ensure a seamless mobile experience.
                </p>

                <p>
                Our team places a strong focus on UI/UX design, ensuring that every app we build is visually engaging, intuitive to use, and optimized for various screen sizes and resolutions. We believe a well-designed app not only looks good but also significantly boosts user engagement, retention, and download rates.
                </p>

                <p>
                Beyond just standalone apps, we create mobile applications that seamlessly integrate with your existing web systems and backend infrastructure. Whether it's a customer portal, real-time order tracking, inventory management, or data collection, we deliver mobile solutions that extend the power of your web apps directly to your users’ fingertips—anytime, anywhere.
                </p>
              <ul className="list-unstyled">
                <li>🔹 E-commerce Mobile Application Development</li>
                <li>🔹 Magento or WordPress Website Design</li>
                <li>🔹 E-commerce Site Support & Maintenance</li>
              </ul>
              <p>
                Our robust cloud infrastructure reduces your server costs significantly. If you have a reliable internet connection, cloud migration is the way forward. To learn more or get started, fill out the contact form below and we’ll get in touch with you.
              </p>
            </div>
            <div className="col-md-5 text-center">
              <img
                src="/img/mobileapp.jpg"
                alt="Web Applications"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
        <section className="section">
          <div className="content-wrapper d-lg-flex align-items-center mb-5">
            <div className="text-section">
              <h2>Mobile App Development</h2>
              <p>
          In today’s internet-driven world, businesses are rapidly transitioning to web applications. Platforms like Facebook, Twitter, and YouTube are prime examples of how powerful online apps can be. Web applications offer numerous benefits including real-time collaboration, advanced data analytics, and big data integration.
        </p>
        <p>
          Our team specializes in building secure, efficient, and scalable web applications tailored to your enterprise needs. Whether you’re looking to modernize your operations or create an entirely new online experience, we’ve got you covered.
        </p>
            </div>
            <div className="image-section me-lg-5 mb-4 mb-lg-0">
              <img src="/img/webapp1.jpg" alt="Desktop Application" className="img-fluid rounded" />
            </div>
          </div>

          <div className="content-wrapper d-lg-flex align-items-center mb-5">
  <div className="image-section me-lg-5 mb-4 mb-lg-0">
    <img src="/img/mobileapp2.jpg" alt="Web Application Migration" className="img-fluid rounded" />
  </div>
  <div className="text-section">
    <h2>✅ Key Features of Mobile App Development</h2>
    <ul className="no-bullets">
    <li>🔐 Secure and encrypted data</li>
      <li>🌐 Access from anywhere</li>
      <li>⚡ Easily scalable</li>
      <li>💼 Real-time collaboration</li>
      <li>📈 Smart data analytics</li>
      <li>🛠️ Low maintenance</li>
      <li>💸 Cost-effective</li>
      <li>🔄 Quick updates</li>
    </ul>
  </div>
</div>

        </section>
        <section className="section">
  <div className="content-wrapper d-lg-flex align-items-center mb-5">
    <div className="text-section">
      <h2>📱 Mobile Applications</h2>
      <p>
        Android and iOS are the leading mobile platforms, and we specialize in creating high-performance, user-friendly applications for both. Our team ensures each app meets industry standards while focusing on elegant UI/UX design that drives downloads and user engagement.
      </p>
      <p>
        Whether you need a standalone app or one that integrates with your web-based backend systems, we ensure smooth functionality and optimized performance across devices.
      </p>
      <ul className="no-bullets">
        <li>📲 Native & Cross-Platform Development</li>
        <li>🎨 Intuitive UI/UX Focused Design</li>
        <li>🔗 API Integration with Web & Cloud Services</li>
        <li>⚙️ Performance Optimization</li>
        <li>🔒 Secure Data Handling</li>
        <li>📤 App Store & Play Store Deployment</li>
        <li>📊 In-app Analytics & User Tracking</li>
        <li>📩 Push Notifications & Messaging</li>
      </ul>
    </div>
    <div className="image-section me-lg-5 mb-4 mb-lg-0">
      <img src="/img/mobileapp1.jpg" alt="Mobile Applications" className="img-fluid rounded shadow" />
    </div>
  </div>
</section>
        <div className="contact my-4 text-center">
          <h4 className="py-3">"Have a project in mind? Let’s bring your idea to life—click the button below to get started."</h4>
          <div className="container">
            <div className="col-md-7">
              <div className="contact-form bg-light">
                <div id="success"></div>
                <form name="sentMessage" id="contactForm" onSubmit={onSubmit} noValidate="novalidate">
                  <div className="control-group">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <select className="form-control" id="serviceCategory" required>
                      <option value="">Mobile App Development</option>
                    </select>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea className="form-control" id="message" placeholder="Message" required data-validation-required-message="Please enter your message"></textarea>
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

export default MobileApp;