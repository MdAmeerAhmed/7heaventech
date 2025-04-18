import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CareerDescription = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });
  const navigate = useNavigate();
  const toggleReadMore = () => {
    setExpanded(!expanded);
  };
  
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Do form validation or backend call here
    alert("You have applied successfully!");
    setShowForm(false);
    navigate("/career");
  };
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="product-widget-area">
    <div className="zigzag-bottom" />
    <div className="container mt-5">
      <div className="d-flex gap-2">
      <button onClick={() => navigate(-1)} className="btn btn-link p-0 text-black">Back to Previous Job</button> |
      <Link to="/career" className="text-black">New Job Search</Link>
      </div>

      <h1 className="mt-3">Application Lead</h1>

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
              <form onSubmit={handleFormSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">Apply for Application Lead</h5>
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Submit Application
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
            <strong>Skill required:</strong> User-Generated Content Moderation - Content Moderation<br />
            <strong>Designation:</strong> Trust & Safety New Associate<br />
            <strong>Qualifications:</strong> Any Graduation<br />
            <strong>Years of Experience:</strong> 0 to 1 years
          </p>

          <p><strong>Description</strong></p>
          <p className="text-muted">Job Posted On: <strong>01st February, 2022</strong></p>

          <p>
            Designs, develops and modifies software applications and components; supports and/or installs software applications and components; works from written specifications and pre-established guidelines to perform the functions of the role.
          </p>

          <h5>Essential Duties and Responsibilities:</h5>
          <ul>
            <li>Utilize established development tools, guidelines, and coding conventions including but not limited to Visual Studio, ASP.NET, MVC, SQL Server, HTML, CSS, JavaScript, and C#/VB.NET to develop world-class software applications.</li>
            <li>Business Development involves scheduling appointments, preparing and delivering presentations to clients after researching their business and requirements.</li>
            <li>Maintain existing software systems by identifying and correcting software defects.</li>
            <li>Participate in regular design and code reviews with development team members to confirm use of best practices.</li>
            <li>Contribute to meeting project and product development goals on-time and on-budget.</li>
            <li>Understand and evaluate new technologies; develop skills in new technologies.</li>
            <li>Complete special projects and assignments as assigned.</li>
          </ul>

          {expanded && (
            <>
              <h5>Key Skills and Qualifications:</h5>
              <ul>
                <li>A degree or equivalent qualification is recommended.</li>
                <li>Hands-on experience in designing interactive applications.</li>
                <li>Proficient with Visual Studio, ASP.NET, SQL Server, HTML, CSS, JavaScript, C#, MVC/VB.NET.</li>
                <li>Excellent knowledge of Relational Databases, SQL.</li>
                <li>Experience with test-driven development.</li>
                <li>Ability to document requirements and specifications.</li>
                <li>Familiarity with software development methodology and release processes.</li>
                <li>Independent development experience; capable of R&D, and troubleshooting in .NET (C#, MVC, VB.NET, ASP.NET).</li>
              </ul>
            </>
          )}

          <button className="btn btn-link p-0" onClick={toggleReadMore}>
            {expanded ? "Read Less" : "Read More..."}
          </button>
        </div>

        <button className="btn btn-outline-primary mt-3">Share</button>

        <div className="w-75 mt-4">
          <button className="btn btn-outline-secondary w-100 text-start" onClick={() => toggleDropdown("notice")}>
            Important Notice {activeDropdown === "notice" ? "▲" : "▼"}
          </button>
          {activeDropdown === "notice" && (
            <div className="border p-3 bg-light mt-2">
              <p>
                We have been alerted to the existence of fraudulent messages asking job seekers to set up payment to cover various costs associated with establishing employment at Accenture. No one is ever required to pay for employment at 7Heaven Technology. If you are contacted by someone asking for payment, please do not respond, and contact us at <a href="mailto: javed.a@7heaventech.com"> javed.a@7heaventech.com</a> immediately.
              </p>
            </div>
          )}

          <button className="btn btn-outline-secondary w-100 text-start mt-2" onClick={() => toggleDropdown("equalEmployment")}>
            Equal Employment Opportunity Statement {activeDropdown === "equalEmployment" ? "▲" : "▼"}
          </button>
          {activeDropdown === "equalEmployment" && (
            <div className="border p-3 bg-light mt-2">
              <p>
                All employment decisions shall be made without regard to age, race, creed, color, religion, sex, national origin, ancestry, disability status, veteran status, sexual orientation, gender identity or expression, genetic information, marital status, citizenship status or any other basis as protected by federal, state, or local law. Job candidates will not be obligated to disclose sealed or expunged records of conviction or arrest as part of the hiring process. Accenture is committed to providing veteran employment opportunities to our service men and women. Please read Accenture’s Recruiting and Hiring Statement for more information on how we process your data during the Recruiting and Hiring process.
              </p>
            </div>
          )}
        </div>

        <div className="d-flex my-3 gap-2">
          <button className="btn btn-success" onClick={() => setShowForm(true)}>Apply Now</button>
          <button className="btn btn-outline-secondary">Register for Job Alerts</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CareerDescription;
