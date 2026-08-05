import { useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { addComplaint } from "../../services/complaintService";

function ReportComplaint() {
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "Medium",
    location: "",
    description: "",
    image: null,
    date: new Date().toLocaleString(),
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];

      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Get Current Location
  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      setFormData((prev) => ({
        ...prev,
        location: `${position.coords.latitude.toFixed(
          5
        )}, ${position.coords.longitude.toFixed(5)}`,
      }));
    });
  };

  // Submit Complaint
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("FORM DATA:", formData);

    try {
      const complaint = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        location: formData.location,
      };

      console.log("Sending:", complaint);

      const response = await addComplaint(complaint);

      console.log("Server Response:", response);

      alert("Complaint Submitted Successfully!");

      setPreview(null);

      setFormData({
        title: "",
        category: "",
        priority: "Medium",
        location: "",
        description: "",
        image: null,
        date: new Date().toLocaleString(),
      });
    } catch (error) {
      console.error("Axios Error:", error);

      if (error.response) {
        console.log("Backend Response:", error.response.data);
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <DashboardLayout>
      <div className="dashboard-card">
        <h2>Report Complaint</h2>

        <form className="complaint-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              type="text"
              name="title"
              placeholder="Complaint Title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Garbage">Garbage</option>
              <option value="Road Damage">Road Damage</option>
              <option value="Drainage">Drainage</option>
              <option value="Street Light">Street Light</option>
              <option value="Water Leakage">Water Leakage</option>
            </select>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="button"
            className="btn btn-outline-success"
            onClick={useCurrentLocation}
          >
            Use Current Location
          </button>

          <textarea
            name="description"
            rows="5"
            placeholder="Describe the issue..."
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="preview-image"
            />
          )}

          <input
            type="text"
            value={formData.date}
            readOnly
          />

          <button
            type="submit"
            className="btn btn-success"
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default ReportComplaint;