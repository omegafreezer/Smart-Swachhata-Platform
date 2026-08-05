import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserTag,
} from "react-icons/fa";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Citizen",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Registration Data:", formData);

    alert("Registration Successful! (Mock)");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Full Name */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <FaUser />
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <FaEnvelope />
        </span>

        <input
          type="email"
          className="form-control"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Phone */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <FaPhone />
        </span>

        <input
          type="tel"
          className="form-control"
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Role */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <FaUserTag />
        </span>

        <select
          className="form-select"
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="Citizen">Citizen</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      {/* Password */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <FaLock />
        </span>

        <input
          type={showPassword ? "text" : "password"}
          className="form-control"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {/* Confirm Password */}
      <div className="input-group mb-4">
        <span className="input-group-text">
          <FaLock />
        </span>

        <input
          type={showPassword ? "text" : "password"}
          className="form-control"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-success w-100 py-2">
        Create Account
      </button>
    </form>
  );
}

export default RegisterForm;