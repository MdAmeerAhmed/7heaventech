import React, { useState } from "react";
// import { FaSearch, FaRegBookmark } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router";


const CareerPage = () => {
  const [expanded, setExpanded] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const toggleReadMore = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSearchTerm(category);
    setActiveCategory(category);
  };

  const jobCategories = [
    "Entry Level Technology Careers",
    "Entry Level Operations Careers",
    "Software Developer",
    "SAP",
    "Tele Caller Executive",
    "Data Analytics",
    "Finance",
    "Operations",
    "Supply Chain",
  ];

  const cities = [
    "Dubai"
  ];

  const jobs = [
    {
      location: "UAE | Dubai",
      title: "Software Developer",
      role: " Dot Net Developer",
      description: "Responsible for developing high-quality web applications. Must have skills: Visual Studio, ASP.NET, MVC, SQL Server, HTML, CSS, JavaScript, and C#/VB.NET",
      details: "Good to have skills: Cloud services, Microservices architecture. Minimum 2 years of experience required.",
      businessArea: "Technology",
      experience: "2-5",
      posted: "Job Posted On 01st February, 2022",
      link: "career/1"
    },
    {
      location: "UAE | Dubai",
      title: "Tele Caller Executive",
      role: "Tele Caller Executive(Female)",
      description: "This job is about answering customer calls, sharing product info, and helping them make decisions.Training is provided to keep knowledge up to date.",
      details: "Must have Persuasion, Telephone Sales, Customer Focus, Data Entry Skills, Selling to Customer Needs, Closing Skills, Telephone Skills, Organization, Energy Level, Persistence, Product Knowledge. Minimum 5 years of experience required.",
      businessArea: "customer calls",
      experience: "1-2",
      posted: "Job Posted On 01st February, 2022",
      link: "career/2"
    },
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-widget-area">
    <div className="zigzag-bottom" />
    <div className="container mt-5">
      <h1 className="text-start">Search Jobs at 7Heaven Technology</h1>
      <div className="d-flex justify-content-start my-4">
        <input
          type="text"
          className="form-control w-50 "
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="btn btn-success ms-2">
          <i className="bi bi-search"></i> Search
        </button>
      </div>
      <div className="mb-4">
        <h4>Popular Searches</h4>
        <div className="d-flex flex-wrap gap-2">
          {jobCategories.map((category, index) => (
            <span 
              key={index} 
              className={`border p-2 rounded cursor-pointer ${activeCategory === category ? 'bg-success text-white' : ''}`} 
              onClick={() => handleCategoryClick(category)}
              style={{ cursor: "pointer" }}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h4>Popular Cities</h4>
        <div className="d-flex flex-wrap gap-2">
          {cities.map((city, index) => (
            <span key={index} className="border p-2 rounded">{city}</span>
          ))}
        </div>
      </div>
      
      <div className="mt-5">
        <h1 className="text-start">Latest Jobs</h1>
        <div className="d-flex justify-content-between align-items-center my-3">
          <div>
            <h5>Sort By:</h5>
            <Link to="" className="me-3">Most Recent</Link> |
            <Link to="" className="ms-3">Most Relevant</Link>
          </div>
          <div>
            <button className="btn btn-outline-success me-2">New Job Search</button>
            <button className="btn btn-outline-success me-2">List View</button>
            <button className="btn btn-outline-success">Filter Results</button>
          </div>
        </div>
        
        <div className="row">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div key={index} className="col-md-4">
                <div className="card p-3 mb-4">
                  <div className="d-flex justify-content-between">
                    <span>{job.location}</span>
                    <i className="bi bi-bookmark"></i>
                  </div>
                  <Link to={`/${job.link}`} className="h4 text-decoration-none mt-2 d-block">{job.title}</Link>
                  <strong>{job.role}</strong>
                  <p className="mb-2">{job.description}
                  {expanded === index && <p>{job.details}</p>}
                  <button className="btn btn-link p-0" onClick={() => toggleReadMore(index)}>
                    {expanded === index ? "Read Less" : "Read More..."}
                  </button>
                  </p>
                  <p className="mt-1"><strong>Business Area:</strong> {job.businessArea}</p>
                  <p><strong>Years of Experience:</strong> {job.experience}</p>
                  <p className="text-muted fst-italic">{job.posted}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No jobs found</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CareerPage;
