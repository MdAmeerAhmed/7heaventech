import React from 'react';
import { useState } from 'react';
function Contact() {
  const [isLoading, setIsLoading] = React.useState(false);
  const cards = [
    { title: "Microsoft", img: "/img/services_logo__1.jpg" },
    { title: "Huawei", img: "/img/services_logo__2.jpg" },
    { title: "HP", img: "/img/services_logo__3.jpg" },
    { title: "Lenovo", img: "/img/services_logo__4.jpg" },
    { title: "Dell", img: "/img/services_logo__5.jpg" },
    { title: "Sonic Wall", img: "/img/services_logo__6.jpg" },
    { title: "IBM", img: "/img/services_logo__7.jpg" },
    { title: "Stanley", img: "/img/services_logo__8.jpg" },
    { title: "Sophos", img: "/img/services_logo__9.jpg" },
    { title: "Sophos", img: "/img/services_logo__10.jpg" },
    { title: "Sophos", img: "/img/services_logo__11.jpg" },
    { title: "Sophos", img: "/img/services_logo__12.jpg" },
    { title: "Sophos", img: "/img/services_logo__13.jpg" },
    { title: "Sophos", img: "/img/services_logo__14.jpg" },
    { title: "Sophos", img: "/img/services_logo__15.jpg" },
    { title: "Sophos", img: "/img/services_logo__16.jpg" },
    { title: "Sophos", img: "/img/services_logo__17.jpg" },
    { title: "Sophos", img: "/img/services_logo__18.jpg" },
    { title: "Sophos", img: "/img/services_logo__19.jpg" },
    { title: "Sophos", img: "/img/services_logo__20.jpg" },
    { title: "Sophos", img: "/img/services_logo__21.jpg" },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? cards : cards.slice(0, 9);

  const toggleShow = () => {
    setShowAll(!showAll);
  };

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
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        alert(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        { 
            question: "What services does 7Heaven Technology provide?", 
            answer: "7Heaven offers IT sales, cloud solutions, structured cabling, and managed IT services, among others."
        },
        { 
            question: "What IT consulting services does 7Heaven Technology offer?", 
            answer: "We offer IT consulting services to help businesses streamline their operations, adopt new technologies, and optimize their IT infrastructure."
        },
        { 
            question: "Can 7Heaven assist with cloud integration?", 
            answer: "Yes, we provide seamless cloud integration services, ensuring your business applications are securely and efficiently migrated to the cloud."
        },
        { 
            question: "How does 7Heaven help with system integration?", 
            answer: "We specialize in integrating hardware, software, and network solutions to create a cohesive and efficient IT environment."
        },
        { 
            question: "What industries do you consult with?", 
            answer: "We consult across various industries, including healthcare, education, government, and hospitality."
        },
        { 
            question: "Can you help my business transition to the cloud?", 
            answer: "Yes, we provide expert consultation and integration services to help businesses smoothly transition to cloud-based systems."
        },
        { 
            question: "How does your consulting service improve my IT infrastructure?", 
            answer: "Our consulting services are tailored to identify gaps, recommend improvements, and implement scalable solutions for optimal IT performance."
        },
        { 
            question: "Does 7Heaven offer data integration services?", 
            answer: "Yes, we assist with data integration to ensure your systems can seamlessly share and process data across platforms."
        },
        { 
            question: "How do your integration services enhance business productivity?", 
            answer: "Our integration services ensure that your IT systems work together seamlessly, reducing downtime and improving overall efficiency."
        },
        { 
            question: "What kind of support do you provide after integration?", 
            answer: "We offer ongoing support and maintenance services to ensure your integrated systems continue to operate smoothly."
        },
    ];


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Left Section - Contact Form */}
          <div
            className="col-lg-7 col-12 text-white text-center p-5"
            style={{
              background: "linear-gradient(94deg, rgb(52, 52, 53) 41%, rgba(168, 170, 176, 0.7) 92%)",
            }}
          >
            <h6>Let Us Elevate Your Business</h6>
            <h2>Ready to start a conversation?</h2>
            <div className="p-4 mx-auto mt-4 bg-secondary rounded" style={{ maxWidth: "600px" }}>
              <form onSubmit={onSubmit} noValidate>
                <div className="mb-3">
                  <input type="text" name="name" className="form-control py-3" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <input type="email" name="email" className="form-control py-3" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <input type="text" name="project" className="form-control py-3" placeholder="Project" required />
                </div>
                <div className="mb-3">
                  <textarea name="message" className="form-control py-3" rows={5} placeholder="Message" required></textarea>
                </div>
                <button className="btn bg-success text-white w-100 py-3" type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Background Image */}
          <div
            className="col-lg-5 col-12"
            style={{
              minHeight: "400px",
              backgroundImage: "url('/img/slide-2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="container my-5">
        <div className="text-center mb-4">
          <h3>Computers Technology</h3>
          <h6>Empower Your Business with Secure, Scalable Cloud Solutions</h6>
          <p className="px-md-5 px-3" style={{ fontSize: '15px', margin: '20px' }}>
            In today's dynamic environment, businesses need visibility, flexibility, and robust security to thrive in the cloud. <strong>7Heaven Technology</strong> offers your team the tools to efficiently manage and monitor cloud operations, ensuring a secure and compliant cloud infrastructure tailored to your business needs.
          </p>
        </div>

        <div className="row px-3">
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4">
  <img
    src="/img/black logo.png"
    className="img-fluid mb-3"
    alt="Logo"
    style={{ maxWidth: '200px' }}
  />

  <h4 className="fw-bold">Office Address</h4>
  <p className="px-2" style={{ maxWidth: '300px' }}>
    Plot No. 11, Survey No. 11, HUDA, Knowledge City, Phase-II,<br />
    Hyderabad, Telangana - 500032, India
  </p>

  <h5 className="mt-3" style={{ color: "#1abc9c" }}>Social Media:</h5>
  <div className="footer-social d-flex gap-3 mt-2">
                            <a href="https://www.facebook.com/profile.php?id=100019035215405" target="_blank"><i class="bi bi-facebook"></i></a>
                            <a href="https://plus.google.com/u/1/109043784206309792225" target="_blank"><i class="bi bi-youtube"></i></a>
                            <a href="https://www.linkedin.com/in/7heaven-technology-dmcc-326370146/" target="_blank"><i class="bi bi-linkedin"></i></a>
                    </div>
</div>


          <div className="col-lg-6 col-md-12 text-center text-md-start">
            <h4>Email Us</h4>
            <a href="mailto:support@7heaventech.com" className="text-decoration-none text-dark d-block mb-2">support@7heaventech.com</a>
            <h4 className="mt-3">Phone Number</h4>
            <p className="mb-1">+971 55 642 4602</p>
            <p>+971 50 905 4633</p>
            <h4 className="mt-3">Website</h4>
            <a href="/" className="text-decoration-none text-dark">www.7heaventech.com</a>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div style={{height:'450px'}}>
          <iframe
            className="rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d2555.5770594845717!2d55.13796945707947!3d25.063523714260022!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d25.0626727!2d55.137552899999996!5e0!3m2!1sen!2sae!4v1584730476886!5m2!1sen!2sae"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="7Heaven Location"
          /> 
      </div>
      <div className="bg-white py-5">
      <div className="text-center">
        <h1>Our Business Partners</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
              <p className="fs-5">
                Trusted Partnerships with Leading Global Technology Providers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4 px-5">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 p-4">
          {visibleCards.map((card, index) => (
            <div className="col" key={index}>
              <img
                src={card.img}
                className="card-img-top img-fluid mt-2"
                alt={card.title}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-outline-success px-4 py-2" onClick={toggleShow}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
    <div className="product-widget-area">
    <div className="zigzag-bottom" />
    <div style={{ margin: "20px" }}>
    <h4>"Got questions? We’ve got answers. Explore our FAQs to learn more about 7Heaven Technology’s services, support, and solutions."</h4>
            <section style={{ padding: "20px", backgroundColor: "#f8f9fa", maxWidth: "1000px", margin: "auto", borderRadius: "8px", boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)" }}>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                        <button 
                            type="button"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`faq-content-${index}`}
                            style={{
                                width: "100%",
                                padding: "12px",
                                textAlign: "left",
                                fontSize: "16px",
                                fontWeight: "bold",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                backgroundColor: openIndex === index ? "#595b5c" : "#fff",
                                color: openIndex === index ? "#fff" : "#000",
                                cursor: "pointer",
                                outline: "none",
                                transition: "all 0.3s ease"
                            }}
                        >
                            {faq.question}
                        </button>
                        {openIndex === index && (
                            <div id={`faq-content-${index}`} style={{ padding: "10px", backgroundColor: "#e9ecef", borderRadius: "5px", marginTop: "5px" }}>
                                <p style={{ margin: 0 }}>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </section>
        </div>
    </div>
    </>
  );
}

export default Contact;
