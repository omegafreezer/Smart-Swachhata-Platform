import { useEffect, useState } from "react";
import { getComplaints } from "../../services/complaintService";

function ComplaintTable() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const loadComplaints = async () => {
      try {
        const data = await getComplaints();
        setComplaints(data);
      } catch (error) {
        console.error("Failed to load complaints:", error);
      }
    };

    loadComplaints();
  }, []);

  return (
    <div className="dashboard-card">
      <h3>Recent Complaints</h3>

      {complaints.length === 0 ? (
        <p>No complaints found.</p>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Location</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {complaints
              .slice()
              .reverse()
              .slice(0, 5)
              .map((complaint) => (
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
                    {new Date(
                      complaint.createdAt
                    ).toLocaleDateString()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ComplaintTable;