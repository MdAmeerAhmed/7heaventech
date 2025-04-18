import React from "react";

function About() {
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
  return (
<>
  <div className="promo-area">
    <div className="zigzag-bottom" />
    <div className="container py-5">
      {/* Our Story Section */}
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-md-5 d-flex justify-content-center">
          <img src="/img/img1.jpg" className="img-fluid rounded w-75 border border-5 border-white" alt="Our Story" />
        </div>
        <div className="col-md-6 text-md-start px-5">
          <h2>Our Story</h2>
          <h5>Building IT Solutions for Over Two Decades</h5>
          <p>
            Established in 2006 by IT professionals in the UAE, 7Heaven Technology was founded to develop business management software for various industries.
            Recognizing Dubai's booming real estate and trading sectors, we started with Property Management Software, Work Order, and Inventory Management solutions.
            Over the years, our expertise in software development and management has resulted in high-quality products with minimal errors.
            Today, our software powers the daily operations of multiple companies.
            With continuous growth in both team size and client base, we have expanded our offerings, including our latest CRM tool, developed based on client requirements.
          </p>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="row justify-content-center align-items-center mb-5 flex-md-row-reverse">
        <div className="col-md-5 d-flex justify-content-center">
          <img src="/img/img1.webp" className="img-fluid rounded w-75 border border-5 border-white" alt="What We Do" />
        </div>
        <div className="col-md-6 text-md-start px-5">
          <h2>What We Do</h2>
          <h5>We specialize in developing cutting-edge business management software to enhance operational efficiency across industries.</h5>
          <p>
            Our software solutions help businesses streamline their processes, manage inventories, track work orders, and optimize customer relationships.
            By leveraging our expertise in software development, we provide tailored tools that improve productivity and ensure seamless business operations.
            Our products, both desktop and SaaS-based, are designed to meet the evolving needs of our clients and give them a competitive edge.
          </p>
        </div>
      </div>

      {/* Why 7Heaven Technology Section */}
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-md-5 d-flex justify-content-center">
          <img src="/img/img2.webp" className="img-fluid rounded w-75 border border-5 border-white" alt="Why 7Heaven Technology" />
        </div>
        <div className="col-md-6 text-md-start px-5">
          <h2>Why 7Heaven Technology</h2>
          <h5>We prioritize customer satisfaction, continuous innovation, and high-quality software solutions.</h5>
          <p>
            At 7Heaven Technology, customer needs are our top priority.
            We dedicate separate teams to understanding user behavior and refining user experience standards.
            Our proactive approach ensures that client feedback directly influences product improvements.
            With dedicated account managers assigned to each client, we provide personalized support and swift resolution of requirements.
            Our mission is to establish 7Heaven Technology as a trusted brand, delivering advanced digital solutions powered by data analytics, big data, and innovation.
          </p>
        </div>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 86.47" preserveAspectRatio="none">
            <g style={{ opacity: 0.33 }}>
                <path d="M823,15.52l.24-.07A27.72,27.72,0,0,0,864.3,30.53a46.9,46.9,0,0,0,51.9,28A55,55,0,0,0,1000,73.07V0H792C795.79,12,809.32,18.85,823,15.52Z" />
                <path d="M23.71,83.4A50,50,0,0,0,85.39,48.77v-.05a25.19,25.19,0,0,0,20.89-4.31,32.67,32.67,0,0,0,12.82,7A32.88,32.88,0,0,0,154.31,0H0V68.64A49.74,49.74,0,0,0,23.71,83.4Z" />
            </g>
            <g style={{ opacity: 0.66 }}>
                <path d="M499.63,19.13h.08a8.91,8.91,0,0,0,12.64,6.15A15.07,15.07,0,0,0,528,35.9a17.67,17.67,0,0,0,33.67-9.55v0A8.9,8.9,0,0,0,567.86,22a11.61,11.61,0,0,0,7.48-22H503.08a11.65,11.65,0,0,0-1.71,4.21,9.2,9.2,0,0,0-3.85-.28c-4.65.65-8,4.58-7.37,8.77S495,19.78,499.63,19.13Z" />
                <path d="M631.55,20.67c1,7.6,8.68,12.87,17.22,11.78a16.35,16.35,0,0,0,11.45-6.74,16.34,16.34,0,0,0,7.07,2.14A10.86,10.86,0,0,0,686.86,35a10.82,10.82,0,0,0,8.1-1c1.68,6.83,9,11.4,17,10.38a16,16,0,0,0,12.48-8.49,19.56,19.56,0,0,0,10.37,1.45,19.24,19.24,0,0,0,11.72-5.89,10.85,10.85,0,0,0,17.33-.92A10.81,10.81,0,0,0,776,31.2a17.64,17.64,0,0,0,3.38,1,18.52,18.52,0,0,0,16.52,6A18.82,18.82,0,0,0,809.34,30c2.67,10,12.75,17.44,24.8,17.44,9.38,0,17.57-4.5,22-11.2a32,32,0,0,0,16.53,4.5,31.47,31.47,0,0,0,20.23-7.14,17.75,17.75,0,0,0,28.32,2.09,17.74,17.74,0,0,0,22.71,1.75c4.13,10.05,15,17.22,27.72,17.22,13.43,0,24.75-8,28.33-18.88V0H599.32C607.84,23.13,631.55,20.67,631.55,20.67Z" />
                <path d="M.74,30.73c0,12.33,11.21,22.33,25.08,22.36,10.84,0,20.08-6.07,23.61-14.62A15.09,15.09,0,0,0,68.74,37a15.1,15.1,0,0,0,24.1-1.74,26.76,26.76,0,0,0,17.2,6.1,27.24,27.24,0,0,0,14.07-3.81,22.33,22.33,0,0,0,18.71,9.56c11.24,0,20.49-7.56,21.62-17.28a14.92,14.92,0,0,0,10.72.18c3.29,7.35,12.1,11.63,21.28,9.81a20.31,20.31,0,0,0,13.62-9.33A20.31,20.31,0,0,0,219,32.56a13.49,13.49,0,0,0,24.86,7.25,13.43,13.43,0,0,0,10-1.91c2.66,8.32,12.06,13.37,21.9,11.42a19.93,19.93,0,0,0,14.75-11.58,24.3,24.3,0,0,0,13,.92,23.88,23.88,0,0,0,14-8.3,13.47,13.47,0,0,0,21.4-2.61,13.46,13.46,0,0,0,17.17-2c4.56,6.88,13.69,10.63,23.18,8.76,12.14-2.4,20.26-13.09,18.13-23.88A73.93,73.93,0,0,0,400.48,0H0V29.49C.24,29.91.48,30.32.74,30.73Z" />
            </g>
            <path d="M16.3,13.9c10.2,2.5,20.3-1.1,25.5-8.3a14.66,14.66,0,0,0,18.5,3A14.6,14.6,0,0,0,80,14.9a13.14,13.14,0,0,0,3.4-2.4,25.71,25.71,0,0,0,14.8,9.7,26,26,0,0,0,14.1-.4,21.75,21.75,0,0,0,15.4,13.3c10.6,2.6,21-2.4,24.3-11.3a15,15,0,0,0,10.7,2.6,17.69,17.69,0,0,0,1.6,2.2,14.69,14.69,0,0,0,17.6,3.5,7.46,7.46,0,0,0,1.2-.7,14.54,14.54,0,0,0,6.4-8.9,12.61,12.61,0,0,0,.4-2.8,20.63,20.63,0,0,0,9.8-1.8,11.35,11.35,0,0,0,1.5,2.3A22.35,22.35,0,0,0,214,28.6c11.2,2.8,22.4-3.1,24.8-13.1a24.63,24.63,0,0,0,16.3,11.6c9.8,2.1,19.4-1.7,24.2-8.7a14,14,0,0,0,17.8,2.4,14.07,14.07,0,0,0,19.1,5.4,12.25,12.25,0,0,0,3.1-2.4,22.5,22.5,0,0,0,5.8,5.3,25.42,25.42,0,0,0,16.1,4,30.38,30.38,0,0,0,6-1.2c.2.4.4.9.6,1.3a20.81,20.81,0,0,0,14.6,11c10.2,2.2,20-2.9,22.9-11.5a13.84,13.84,0,0,0,10.3,2.1,14,14,0,0,0,19.3,4.6,14.17,14.17,0,0,0,6.7-11.8,20,20,0,0,0,9.3-2,21.31,21.31,0,0,0,14,9.9c10.6,2.3,20.9-3.4,23.2-12.7a28.46,28.46,0,0,0,37.2,7.1,23.54,23.54,0,0,0,7.3-7.1,15.79,15.79,0,0,0,20.1,2.1,15.69,15.69,0,0,0,21.6,5.5,13.88,13.88,0,0,0,3.5-2.9,26.66,26.66,0,0,0,9.5,7.2,28.5,28.5,0,0,0,7,2.2,29.16,29.16,0,0,0,15.2-1.3c2.8,6.6,9.3,11.8,17.5,13.3,11.4,2.1,22.2-3.8,25.3-13.4,0-.1.1-.2.1-.4.3.2.7.4,1,.6a15.93,15.93,0,0,0,10.7,1.5,15.79,15.79,0,0,0,28.7-6c.1-.4.1-.8.2-1.2a10.87,10.87,0,0,0,.1-1.8,22.26,22.26,0,0,0,10.4-2.6,25,25,0,0,0,3.9,4.7,24.65,24.65,0,0,0,12.2,6A24.5,24.5,0,0,0,715.3,34a19.09,19.09,0,0,0,10.2-13.4h.5a21.68,21.68,0,0,0,21.1,13,13.67,13.67,0,0,0,1.9-.2,22.1,22.1,0,0,0,13.8-7.7,24.79,24.79,0,0,0,11.9,8.5,25.09,25.09,0,0,0,8.1,1.4,25.86,25.86,0,0,0,18.5-6.7,21.77,21.77,0,0,0,5.2-7.2,15,15,0,0,0,19.1-1,15,15,0,0,0,21,2,13.81,13.81,0,0,0,2.8-3.1A26.84,26.84,0,0,0,866.3,26a27.39,27.39,0,0,0,14-3.4,22.36,22.36,0,0,0,18.3,9.9c11.1.3,20.4-7,21.8-16.6a15,15,0,0,0,11.2.2,15,15,0,0,0,21.1,1,15.16,15.16,0,0,0,4.7-13.5A22.32,22.32,0,0,0,966.3,0H0V1.6A25.29,25.29,0,0,0,16.3,13.9Z" />
            <path d="M983.6,7.3A22.61,22.61,0,0,0,1000,1.1V0H967.3A22.52,22.52,0,0,0,983.6,7.3Z" />
        </svg>
  <div className="bg-white py-5">
            <div className="text-center">
                <h1>Our Business Partners</h1>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto ">
                            <p className="fs-5">
                                Trusted Partnerships with Leading Global Technology Providers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4 px-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 p-4 mx-5">
                    {cards.map((card, index) => (
                        <div className="col" key={index}>
                            <img src={card.img} className="card-img-top img-fluid mt-2" alt={card.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 86.47" preserveAspectRatio="none">
            <g transform="scale(1, -1) translate(0, -86.47)" style={{ opacity: 0.33 }}>
                <path d="M823,15.52l.24-.07A27.72,27.72,0,0,0,864.3,30.53a46.9,46.9,0,0,0,51.9,28A55,55,0,0,0,1000,73.07V0H792C795.79,12,809.32,18.85,823,15.52Z" />
                <path d="M23.71,83.4A50,50,0,0,0,85.39,48.77v-.05a25.19,25.19,0,0,0,20.89-4.31,32.67,32.67,0,0,0,12.82,7A32.88,32.88,0,0,0,154.31,0H0V68.64A49.74,49.74,0,0,0,23.71,83.4Z" />
            </g>
            <g transform="scale(1, -1) translate(0, -86.47)" style={{ opacity: 0.66 }}>
                <path d="M499.63,19.13h.08a8.91,8.91,0,0,0,12.64,6.15A15.07,15.07,0,0,0,528,35.9a17.67,17.67,0,0,0,33.67-9.55v0A8.9,8.9,0,0,0,567.86,22a11.61,11.61,0,0,0,7.48-22H503.08a11.65,11.65,0,0,0-1.71,4.21,9.2,9.2,0,0,0-3.85-.28c-4.65.65-8,4.58-7.37,8.77S495,19.78,499.63,19.13Z" />
                <path d="M631.55,20.67c1,7.6,8.68,12.87,17.22,11.78a16.35,16.35,0,0,0,11.45-6.74,16.34,16.34,0,0,0,7.07,2.14A10.86,10.86,0,0,0,686.86,35a10.82,10.82,0,0,0,8.1-1c1.68,6.83,9,11.4,17,10.38a16,16,0,0,0,12.48-8.49,19.56,19.56,0,0,0,10.37,1.45,19.24,19.24,0,0,0,11.72-5.89,10.85,10.85,0,0,0,17.33-.92A10.81,10.81,0,0,0,776,31.2a17.64,17.64,0,0,0,3.38,1,18.52,18.52,0,0,0,16.52,6A18.82,18.82,0,0,0,809.34,30c2.67,10,12.75,17.44,24.8,17.44,9.38,0,17.57-4.5,22-11.2a32,32,0,0,0,16.53,4.5,31.47,31.47,0,0,0,20.23-7.14,17.75,17.75,0,0,0,28.32,2.09,17.74,17.74,0,0,0,22.71,1.75c4.13,10.05,15,17.22,27.72,17.22,13.43,0,24.75-8,28.33-18.88V0H599.32C607.84,23.13,631.55,20.67,631.55,20.67Z" />
                <path d="M.74,30.73c0,12.33,11.21,22.33,25.08,22.36,10.84,0,20.08-6.07,23.61-14.62A15.09,15.09,0,0,0,68.74,37a15.1,15.1,0,0,0,24.1-1.74,26.76,26.76,0,0,0,17.2,6.1,27.24,27.24,0,0,0,14.07-3.81,22.33,22.33,0,0,0,18.71,9.56c11.24,0,20.49-7.56,21.62-17.28a14.92,14.92,0,0,0,10.72.18c3.29,7.35,12.1,11.63,21.28,9.81a20.31,20.31,0,0,0,13.62-9.33A20.31,20.31,0,0,0,219,32.56a13.49,13.49,0,0,0,24.86,7.25,13.43,13.43,0,0,0,10-1.91c2.66,8.32,12.06,13.37,21.9,11.42a19.93,19.93,0,0,0,14.75-11.58,24.3,24.3,0,0,0,13,.92,23.88,23.88,0,0,0,14-8.3,13.47,13.47,0,0,0,21.4-2.61,13.46,13.46,0,0,0,17.17-2c4.56,6.88,13.69,10.63,23.18,8.76,12.14-2.4,20.26-13.09,18.13-23.88A73.93,73.93,0,0,0,400.48,0H0V29.49C.24,29.91.48,30.32.74,30.73Z" />
            </g>
            <path transform="scale(1, -1) translate(0, -86.47)" d="M16.3,13.9c10.2,2.5,20.3-1.1,25.5-8.3a14.66,14.66,0,0,0,18.5,3A14.6,14.6,0,0,0,80,14.9a13.14,13.14,0,0,0,3.4-2.4,25.71,25.71,0,0,0,14.8,9.7,26,26,0,0,0,14.1-.4,21.75,21.75,0,0,0,15.4,13.3c10.6,2.6,21-2.4,24.3-11.3a15,15,0,0,0,10.7,2.6,17.69,17.69,0,0,0,1.6,2.2,14.69,14.69,0,0,0,17.6,3.5,7.46,7.46,0,0,0,1.2-.7,14.54,14.54,0,0,0,6.4-8.9,12.61,12.61,0,0,0,.4-2.8,20.63,20.63,0,0,0,9.8-1.8,11.35,11.35,0,0,0,1.5,2.3A22.35,22.35,0,0,0,214,28.6c11.2,2.8,22.4-3.1,24.8-13.1a24.63,24.63,0,0,0,16.3,11.6c9.8,2.1,19.4-1.7,24.2-8.7a14,14,0,0,0,17.8,2.4,14.07,14.07,0,0,0,19.1,5.4,12.25,12.25,0,0,0,3.1-2.4,22.5,22.5,0,0,0,5.8,5.3,25.42,25.42,0,0,0,16.1,4,30.38,30.38,0,0,0,6-1.2c.2.4.4.9.6,1.3a20.81,20.81,0,0,0,14.6,11c10.2,2.2,20-2.9,22.9-11.5a13.84,13.84,0,0,0,10.3,2.1,14,14,0,0,0,19.3,4.6,14.17,14.17,0,0,0,6.7-11.8,20,20,0,0,0,9.3-2,21.31,21.31,0,0,0,14,9.9c10.6,2.3,20.9-3.4,23.2-12.7a28.46,28.46,0,0,0,37.2,7.1,23.54,23.54,0,0,0,7.3-7.1,15.79,15.79,0,0,0,20.1,2.1,15.69,15.69,0,0,0,21.6,5.5,13.88,13.88,0,0,0,3.5-2.9,26.66,26.66,0,0,0,9.5,7.2,28.5,28.5,0,0,0,7,2.2,29.16,29.16,0,0,0,15.2-1.3c2.8,6.6,9.3,11.8,17.5,13.3,11.4,2.1,22.2-3.8,25.3-13.4,0-.1.1-.2.1-.4.3.2.7.4,1,.6a15.93,15.93,0,0,0,10.7,1.5,15.79,15.79,0,0,0,28.7-6c.1-.4.1-.8.2-1.2a10.87,10.87,0,0,0,.1-1.8,22.26,22.26,0,0,0,10.4-2.6,25,25,0,0,0,3.9,4.7,24.65,24.65,0,0,0,12.2,6A24.5,24.5,0,0,0,715.3,34a19.09,19.09,0,0,0,10.2-13.4h.5a21.68,21.68,0,0,0,21.1,13,13.67,13.67,0,0,0,1.9-.2,22.1,22.1,0,0,0,13.8-7.7,24.79,24.79,0,0,0,11.9,8.5,25.09,25.09,0,0,0,8.1,1.4,25.86,25.86,0,0,0,18.5-6.7,21.77,21.77,0,0,0,5.2-7.2,15,15,0,0,0,19.1-1,15,15,0,0,0,21,2,13.81,13.81,0,0,0,2.8-3.1A26.84,26.84,0,0,0,866.3,26a27.39,27.39,0,0,0,14-3.4,22.36,22.36,0,0,0,18.3,9.9c11.1.3,20.4-7,21.8-16.6a15,15,0,0,0,11.2.2,15,15,0,0,0,21.1,1,15.16,15.16,0,0,0,4.7-13.5A22.32,22.32,0,0,0,966.3,0H0V1.6A25.29,25.29,0,0,0,16.3,13.9Z" />
            <path transform="scale(1, -1) translate(0, -86.47)" d="M983.6,7.3A22.61,22.61,0,0,0,1000,1.1V0H967.3A22.52,22.52,0,0,0,983.6,7.3Z" />
        </svg>
        <div className="product-widget-area">
        <div className="zigzag-bottom" />
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
              backgroundImage: "url('/img/contact-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>  
        </div>
</>

  );
}
export default About;
