import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Swal from 'sweetalert2' 

function PropertyManagementSoftware() {
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    review: '',
  });
  
  const [showLists, setShowLists] = useState({
    list1: false,
    list2: false,
    list3: false,
    list4: false,
    list5: false,
  });

  const products = [
    {
      img: 'img/product-2.jpg',
      link: '/property-crm',
      title: 'Property CRM Software',
      description: 'Manage your leads - Sales funnel',
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
      link: '/centralised-document',
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

  const toggleList = (listKey) => {
    setShowLists((prev) => ({
      ...prev,
      [listKey]: !prev[listKey],
    }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      'Your request has been delivered to 7Heaven Customer Care.\r\nYou will be attended within 24 Hrs.\r\nThank you for showing interest in us.'
    );
    setFormData({ name: '', email: '', phone: '', review: '' });
  };

  return (
    <div className="single-product-area" style={{ paddingTop: '50px' }}>
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="product-bit-title text-center">
          <h2 style={{ color: '#000', paddingTop: '5px' }}>Property Management Software</h2>
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
                  {
                    key: 'list1',
                    title: 'Reminders & Notifications',
                    items: [
                      'Contracts that are waiting for renewal.',
                      'Upcoming PDCs',
                      'Work order approvals and status',
                      'Tenant document expiration',
                      'Vacant units and opportunity loss cost',
                      'Mass emailing notice to tenants',
                      'Customizing auto mail templates',
                    ],
                  },
                  {
                    key: 'list2',
                    title: 'Leasing, Operation and Administration',
                    items: [
                      'Portfolio and property setup',
                      'Contract creation',
                      'Reservation and advance booking',
                      'Payment installment collection',
                      'Dispute management',
                      'Sending renewal notification by EMAIL/SMS',
                      'Bulk Renewal Letter printing for COURIER',
                      'Conversation record',
                      'Various analytical report',
                      'Tenant / Prospect directory',
                      'Contract extension',
                      'Contract termination and settlement',
                      'Sending termination letter by EMAIL/SMS',
                      'Bulk termination letter printing for COURIER',
                      'Document Control',
                      'Contract Printing (Dubai, Sharjah and others)',
                    ],
                  },
                  {
                    key: 'list3',
                    title: 'Work order and maintenance management',
                    items: [
                      'Work order setup',
                      'Tenant complaint registration',
                      'Vendor contract management',
                      'Vendor quotation receiving and approval',
                      'Job completion reconfirmation',
                      'Emailing work order to vendor',
                      'Reports on work order',
                      'Master data driven operation',
                      'General maintenance request',
                      'Vendor contract renewal and termination',
                      'Job follow up and completion',
                      'In house staff work order',
                      'Expense and Budgeting on Maintenance',
                    ],
                  },
                  {
                    key: 'list4',
                    title: 'Accounts',
                    items: [
                      'Account ledger and sub ledger',
                      'Bank and bank account',
                      'Charge setup.',
                      'Cash Collection and Cash to Bank.',
                      'Balance Sheet, Trial Balance & P/L',
                      'Categorized Income and Expense Reports.',
                      'Receivable and Payment to Tenant / Vendor',
                      'Analytical Reports on Finance',
                      'Financial calendar, opening and closing book.',
                      'Budget management.',
                      'Voucher (Contra, Payment, Receipt, Journal).',
                      'PDC Management.',
                      'Cash flow',
                      'KPI and Dashboard.',
                    ],
                  },
                  {
                    key: 'list5',
                    title: 'Reports',
                    items: [
                      'Accounts',
                      'Contract',
                      'Property & Unit',
                      'Maintenance',
                      'System Administration',
                    ],
                  },
                ].map(({ key, title, items }) => (
                  <div key={key} className="thubmnail-recent">
                    <h4 style={{ fontSize: '1.2em', marginBottom: '10px' }} onClick={() => toggleList(key)}>
                      <button style={{ border: 'none', background: 'none', padding: 0, fontWeight: 'bold' }}>
                        {title}
                      </button>
                    </h4>
                    {showLists[key] && (
                      <ol style={{ marginBottom: '20px' }}>
                        {items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ol>
                    )}
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
                    <Link to="#">Why is it better than excel sheets?</Link>
                  </li>
                  <li>
                    <Link to="#">We use basic accounting software. Why use this?</Link>
                  </li>
                  <li>
                    <Link to="#">Is data migration possible?</Link>
                  </li>
                  <li>
                    <Link to="#">What all can be done in finance management section?</Link>
                  </li>
                  <li>
                    <Link to="#">How users are given tasks?</Link>
                  </li>
                  <li>
                    <Link to="#">Where data is stored? Are you providing server related services?</Link>
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
                <Link to="#">Property Management Software</Link>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="product-images">
                    <div className="product-main-img">
                      <img src="img/product-1.jpg" alt="Main" />
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
                    <h2 className="product-name">For property leasing & Management</h2>
                    <div className="product-inner-category">
                      <p>
                        Tags:{' '}
                        <Link to="#">Property rental management</Link>,{' '}
                        <Link to="#">leasing manager</Link>,{' '}
                        <Link to="#">account manager</Link>,{' '}
                        <Link to="#">landlords</Link>.
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
                              This software makes your property management efficient with accurate analysis of your
                              business status...
                            </p>
                            <p>
                              The software will also give you a number of reports which you can read about in the
                              features section...
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

export default PropertyManagementSoftware;
