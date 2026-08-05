import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock Login
    login({
      name: "Saksham",
      email: formData.email,
      role: "Citizen",
    });

    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <FaEnvelope />
        </span>

        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Password */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <FaLock />
        </span>

        <input
          type={showPassword ? "text" : "password"}
          className="form-control"
          placeholder="Enter Password"
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

      {/* Remember Me & Forgot Password */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="remember"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />

          <label className="form-check-label" htmlFor="remember">
            Remember Me
          </label>
        </div>

        <a href="#" className="forgot-link">
          Forgot Password?
        </a>
      </div>

      {/* Login Button */}
      <button type="submit" className="btn btn-success w-100 py-2">
        Login
      </button>
    </form>
  );
}

export default LoginForm;