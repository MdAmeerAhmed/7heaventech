import React from "react";

function From() {
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
    <div className="contact mt-125 text-center">
      <h4 className="py-3">
        "Have a project in mind? Let’s bring your idea to life—click the button
        below to get started."
      </h4>
      <div className="container">
        <div className="col-md-7 mx-auto">
          <div className="contact-form">
            <form onSubmit={onSubmit} noValidate>
              <div className="control-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="control-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="control-group">
                <select
                  name="serviceCategory"
                  className="form-control"
                  required
                >
                  <option value="">Select Service Category</option>
                  <option value="Custom Desktop Applications">
                    Custom Desktop Applications
                  </option>
                  <option value="Web Applications">Web Applications</option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                </select>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="control-group">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="text-center mt-3">
                <button className="btn" type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "GET QUOTE"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default From;
