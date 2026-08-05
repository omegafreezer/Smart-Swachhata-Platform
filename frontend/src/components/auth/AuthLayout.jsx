import { Link } from "react-router-dom";
import { FaRecycle } from "react-icons/fa";
import authImage from "../../assets/images/auth.png";
import "../../styles/auth.css";

function AuthLayout({
  title,
  subtitle,
  children,
  isLogin,
}) {
  return (
    <div className="auth-page">
      <div className="container">
        <div className="row auth-container">

          {/* Left Side */}
          <div className="col-lg-6 auth-left">

            <div className="brand">
              <FaRecycle className="brand-icon" />

              <h1>Smart Swachhata</h1>

              <p>
                Building Cleaner, Greener & Smarter Cities Through
                Technology
              </p>
            </div>

            <img
              src={authImage}
              alt="Smart Swachhata Authentication"
              className="auth-image"
            />

          </div>

          {/* Right Side */}
          <div className="col-lg-6 auth-right">

            <div className="auth-card">

              <h2>{title}</h2>

              <p>{subtitle}</p>

              {children}

              <div className="auth-switch">

                {isLogin ? (
                  <>
                    Don't have an account?{" "}
                    <Link to="/register">
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <Link to="/login">
                      Login
                    </Link>
                  </>
                )}

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AuthLayout;