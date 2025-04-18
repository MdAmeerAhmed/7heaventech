import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CareerDescrip = () => {
  const [expanded, setExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
  
    const formData = new FormData();
    formData.append("name", formData.name);
    formData.append("email", formData.email);
    formData.append("resume", formData.resume);
    formData.append("access_key", "224fd079-f731-471a-8439-6e2bd955c5c6");
  
    // Debugging: Log form data
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert("Form Submitted Successfully");
        event.target.reset();
        setShowForm(false);
        setFormData({
          name: "",
          email: "",
          resume: null,
        });
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
    <div className="product-widget-area">
      <div className="zigzag-bottom" />
      <div className="container mt-5">
        <div className="d-flex gap-2">
          <button onClick={() => navigate(-1)} className="btn btn-link p-0 text-black">Back to Previous Job</button> |
          <Link to="/career" className="text-black">New Job Search</Link>
        </div>

        <h1 className="mt-3">Tele Caller Executive</h1>

        <p>
          <span className="text-black fw-bold">Bengaluru</span> |
          <span className="text-black fw-bold"> Job No. aioc-s01548676</span> |
          <span className="text-black fw-bold"> Full-time</span>
        </p>

        <div className="d-flex gap-2">
          <button className="btn btn-success" onClick={() => setShowForm(true)}>Apply Now</button>
          <button className="btn btn-outline-secondary">Save Job</button>
          <button className="btn btn-outline-secondary">Register for Job Alerts</button>
        </div>

        <p className="mt-3 text-muted">
          Please be informed that at any given point in time, you can only have one "Active" application.
        </p>
        {showForm && (
          <div className="modal d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <form onSubmit={onSubmit} encType="multipart/form-data">
                  <div className="modal-header">
                    <h5 className="modal-title">Apply for Tele Caller Executive</h5>
                    <button type="button" className="btn-close" onClick={() => setShowForm(false)}></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Upload Resume (PDF)</label>
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf"
                        className="form-control"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={isLoading}>
                      {isLoading ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <div className="border p-3 bg-light mt-4">
          <div className="border p-3 bg-white rounded mt-4 w-75">
            <h4>Job Description</h4>
            <p>
              <strong>Skill required:</strong> Tele Caller Executive<br />
              <strong>Designation:</strong> BPO Associate<br />
              <strong>Qualifications:</strong> Any Graduation<br />
              <strong>Years of Experience:</strong> 1 to 3 years
            </p>

            <p><strong>Description</strong></p>
            <p className="text-muted">Job Posted On: <strong>01st February, 2022</strong></p>

            <h5>Roles & Responsibilities:</h5>
            <ul>
              <li>Advises present or prospective customers by answering incoming calls on a rotating basis; operating telephone equipment, automatic dialing systems, and other telecommunications technologies.</li>
              <li>Influences customers to buy or retain product or service by following a prepared script to give product reference information.</li>
              <li>Documents transactions by completing forms and record logs.</li>
              <li>Maintains database by entering, verifying, and backing up data.</li>
              <li>Keeps equipment operational by following manufacturer's instructions and established procedures; notifying team leader of needed repairs.</li>
              <li>Maintains operations by following policies and procedures; reporting needed changes.</li>
              <li>Maintains quality service by following organization standards.</li>
              <li>Maintains technical knowledge by attending educational workshops; reviewing publications.</li>
            </ul>

            {expanded && (
              <>
                <h5>Key Skills and Qualifications:</h5>
                <ul>
                  <li>Persuasion</li>
                  <li>Telephone Sales</li>
                  <li>Customer Focus</li>
                  <li>Data Entry Skills</li>
                  <li>Selling to Customer Needs</li>
                  <li>Closing Skills</li>
                  <li>Telephone Skills</li>
                  <li>Organization</li>
                  <li>Energy Level</li>
                  <li>Persistence</li>
                  <li>Product Knowledge</li>
                </ul>
              </>
            )}

            <button className="btn btn-link p-0" onClick={toggleReadMore}>
              {expanded ? "Read Less" : "Read More..."}
            </button>
          </div>

          <button className="btn btn-outline-primary mt-3">Share</button>

          {/* Important Notice & EEO - remains unchanged */}

          <div className="d-flex my-3 gap-2">
            <button className="btn btn-success" onClick={() => setShowForm(true)}>Apply Now</button>
            <button className="btn btn-outline-secondary">Register for Job Alerts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDescrip;
