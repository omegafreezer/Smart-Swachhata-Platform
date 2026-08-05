import {
  FaBell,
  FaSearch,
  FaUserCircle
} from "react-icons/fa";

function Topbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="topbar">

      <div className="topbar-left">

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search complaints..."
          />
        </div>

      </div>

      <div className="topbar-right">

        <div className="today">
          {today}
        </div>

        <FaBell className="top-icon" />

        <div className="profile">

          <FaUserCircle className="profile-icon"/>

          <div>
            <strong>Saksham</strong>
            <p>Citizen</p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;