import React, { useState } from 'react';
import '../css/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formPayload = new FormData();
    formPayload.append('access_key', '224fd079-f731-471a-8439-6e2bd955c5c6');
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('subject', formData.subject);
    formPayload.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <div className="product-widget-area">
      <div className="zigzag-bottom" />
      <section id="contact" className="contact section light-background">
        <div className="promo-area">
          <div className="zigzag-bottom" style={{ background: '#fff' }} />
          <div className="container section-title" data-aos="fade-up">
            <h2>Let Us Elevate Your Business</h2>
            <p>Ready to start a conversation?</p>
          </div>
          <div className="container mt-5 bg-light rounded-2 p-5 " data-aos="fade" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="info-item d-flex text-black" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Cluster N, Dome Tower, JLT Towers, Dubai, UAE, P.O. Box: 121325</p>
                  </div>
                </div>

                <div className="info-item d-flex text-black" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+971 50 905 4633</p>
                  </div>
                </div>

                <div className="info-item d-flex text-black" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>support@7heaventech.com</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 bg-white rounded-2 p-5">
                <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-12">
                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        placeholder="Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      {status === 'loading' && <div className="loading">Sending...</div>}
                      {status === 'error' && <div className="error-message">Something went wrong!</div>}
                      {status === 'success' && <div className="sent-message">Your message has been sent. Thank you!</div>}

                      <button type="submit" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
