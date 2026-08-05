import { useEffect, useMemo, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import {
  getComplaints,
  deleteComplaint,
} from "../../services/complaintService";

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  // Load complaints
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const data = await getComplaints();
        setComplaints(data);
      } catch (error) {
        console.error(error);
        alert("Failed to load complaints.");
      }
    };

    fetchComplaints();
  }, []);

  // Delete complaint
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this complaint?")) return;

    try {
      await deleteComplaint(id);

      const data = await getComplaints();
      setComplaints(data);

      alert("Complaint Deleted Successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete complaint.");
    }
  };

  // Search & Filter
  const filteredComplaints = useMemo(() => {
    return complaints.filter((complaint) => {
      const matchSearch = complaint.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" || complaint.category === category;

      const matchStatus =
        status === "All" || complaint.status === status;

      return matchSearch && matchCategory && matchStatus;
    });
  }, [complaints, search, category, status]);

  return (
    <DashboardLayout>
      <div className="dashboard-card">
        <h2>My Complaints</h2>

        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search Complaint..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Garbage">Garbage</option>
            <option value="Road Damage">Road Damage</option>
            <option value="Drainage">Drainage</option>
            <option value="Street Light">Street Light</option>
            <option value="Water Leakage">Water Leakage</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        {filteredComplaints.length === 0 ? (
          <p>No complaints found.</p>
        ) : (
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Location</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredComplaints.map((complaint) => (
                <tr key={complaint._id}>
                  <td>{complaint.title}</td>

                  <td>{complaint.category}</td>

                  <td>
                    <span
                      className={`status ${complaint.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {complaint.status}
                    </span>
                  </td>

                  <td>{complaint.location}</td>

                  <td>
                    {new Date(complaint.createdAt).toLocaleString()}
                  </td>

                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() =>
                        alert(
                          `Title: ${complaint.title}\n\nDescription:\n${complaint.description}`
                        )
                      }
                    >
                      View
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(complaint._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardLayout>
  );
}

export default MyComplaints;