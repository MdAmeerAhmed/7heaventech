import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Swal from 'sweetalert2'
function PropertyCRMTool() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    review: '',
  });
    
    
  const products = [
    {
      img: 'img/product-1.jpg',
      link: '/property-management',
      title: 'Property Management Software',
      description: 'Manage your properties - Lease Management',
    },
    {
      img: 'img/product-3.jpg',
      link: '/property-broker',
      title: 'Property Broker Management Software',
      description: 'Register, manage and sell broker services',
    },
    {
      img: 'img/product-4.jpg',
      link: '/work-order',
      title: 'Work Order Management Software',
      description: 'Register complaints and track status of works',
    },
    {
      img: 'img/product-6.jpg',
      link: 'Centraldoc.php',
      title: 'Centralised Document Management',
      description: 'Scan & Upload documents and Manage access to users',
    },
    {
      img: 'img/product-9.jpg',
      link: '/inventory-management',
      title: 'Inventory Management Software',
      description: 'Manage purchase, track inventory and track damages',
    },
    {
      img: 'img/product-11.jpg',
      link: '',
      title: 'HR and Payroll Management',
      description: 'Manage employees, upload documents, post new jobs online',
    },
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="single-product-area" style={{ paddingTop: '50px' }}>
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="product-bit-title text-center">
          <h2 style={{ color: '#000', paddingTop: '5px' }}>Property CRM Tool</h2>
        </div>
        <div className="row">
          {/* Left Sidebar */}
          <div className="col-md-4">
            <div className="single-sidebar">
              <div className="thubmnail-recent">
                <h1 style={{ paddingBottom: '15px', color: '#1abc9c', marginTop: '35px' }}>
                  <Link to="Features_Propertymanager.html">Features</Link>
                </h1>

                {[
                  'Reminders & Notifications',
                  'Buyers and Sellers Record',
                  'Deal Management and Commission',
                  'Sales Agent and Commission Management',
                  'System and User Administration',
                  'Reports and Dashboards',
                  'Document Management',
                  'Portal for Customer',
                ].map((title) => (
                  <div key={title} className="thubmnail-recent">
                    <h2>{title}</h2>
                  </div>
                ))}

                <Link style={{ fontWeight: '700' }} to="Features_Propertymanager.html">
                  View Detail
                </Link>
              </div>

              <div className="single-sidebar">
                <h2 className="sidebar-title">Frequently Asked Questions</h2>
                <ul>
                  <li>
                    <Link to="#">Why use a CRM software in sales?</Link>
                  </li>
                  <li>
                    <Link to="#">Why is it better than excel sheets?</Link>
                  </li>
                  <li>
                    <Link to="#">Can I measure the performance of sales executives with this?</Link>
                  </li>
                  <li>
                    <Link to="#">How can I engage customers using this?</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-md-8">
            <div className="product-content-right">
              <div className="product-breadcroumb">
                <Link to="index.html">Home</Link>
                <Link to="AllProducts.html">All Products</Link>
                <Link to="#">Property CRM</Link>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="product-images">
                    <div className="product-main-img">
                      <img src="img/product-2.jpg" alt="Main" />
                    </div>
                    <div className="product-gallery">
                      <img src="img/product-feature1.png" alt="" />
                      <img src="img/product-feature2.png" alt="" />
                      <img src="img/product-feature3.png" alt="" />
                      <img src="img/product-feature4.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="product-inner">
                    <h2 className="product-name">For property sales & lead management</h2>
                    <div className="product-inner-category">
                      <p>
                        Tags:{' '}
                        <Link to="#">Property CRM</Link>,{' '}
                        <Link to="#">CRM Tool</Link>,{' '}
                        <Link to="#">Social Media Engagement</Link>,{' '}
                        <Link to="#">More sales</Link>.
                      </p>
                    </div>

                    {/* Tabs */}
                    <div role="tabpanel">
                      <ul className="product-tab" role="tablist">
                        <li role="presentation">
                          <button
                            className={`fancy ${activeTab === 'home' ? 'active' : ''}`}
                            onClick={() => setActiveTab('home')}
                          >
                            Description
                          </button>
                        </li>
                        <li role="presentation">
                          <button
                            className={`fancy ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveTab('profile')}
                          >
                            Book Demo
                          </button>
                        </li>
                      </ul>

                      {/* Tab Content */}
                      <div className="tab-content">
                        {activeTab === 'home' && (
                          <div role="tabpanel" className="tab-pane active" id="home">
                            <h2>Product Description</h2>
                            <p>
                              Customer Relation Manager Software for property sales is used to manage the sales
                              activities of properties. You can engage the customers, sales executives and managers
                              using this software. With a sales funnel structure, this software enables you to manage
                              the leads by moving it from one stage to other and ultimately helping you to close the
                              deals.
                            </p>
                            <p>
                              You can also assign activities, schedule meetings and set user based privileges like
                              sending SMS, bulk email etc. With this, you can manage your sales team and track the
                              performance of employees. You will also understand the market response and feedbacks
                              about your property.
                            </p>
                          </div>
                        )}

                        {activeTab === 'profile' && (
                          <div role="tabpanel" className="tab-pane active" id="profile">
                            <h2>Enter your details</h2>
                            <div className="submit-review">
                            <form id="frmContact" name="frmContact" onSubmit={onSubmit} noValidate="novalidate">
                            <p>
                              <label htmlFor="name">Name</label>
                              <input
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                              />
                            </p>
                            <p>
                              <label htmlFor="email">Email</label>
                              <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </p>
                            <p>
                              <label htmlFor="phone">Contact No.</label>
                              <input
                                name="phone"
                                type="tel"
                                maxLength="15"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                              />
                            </p>
                            <p>
                              <label htmlFor="review">Comments</label>
                              <textarea
                                name="review"
                                cols="30"
                                rows="5"
                                value={formData.review}
                                onChange={handleChange}
                                required
                              ></textarea>
                            </p>
                            <p>
                              <button className="btn btn-success" type="submit" id="sendMessageButton" disabled={isLoading}>
                                {isLoading ? "Submitting..." : "GET QUOTE"}
                              </button>
                            </p>
                          </form>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* End Tabs */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="related-products-wrapper">
            <h2 className="related-products-title">Related Products</h2>

            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              navigation
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="single-product">
                    <div className="product-f-image">
                      <img src={product.img} alt={product.title} />
                      <div className="product-hover">
                        <Link to={product.link} className="add-to-cart-link">
                          <i className="fa fa-shopping-cart"></i> Book Demo
                        </Link>
                        <Link to={product.link} className="view-details-link">
                          <i className="fa fa-link"></i> See details
                        </Link>
                      </div>
                    </div>
                    <h2>
                      <Link to={product.link}>{product.title}</Link>
                    </h2>
                    <div className="product-carousel-price">
                      <p>{product.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* End Main Content */}
        </div>
      </div>
    </div>
  );
}

export default PropertyCRMTool;
