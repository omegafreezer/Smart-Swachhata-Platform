import { useEffect, useMemo, useState } from "react";
import { getComplaints } from "../services/complaintService";

export default function useComplaints() {
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

  const stats = useMemo(() => {
    const total = complaints.length;

    const pending = complaints.filter(
      (c) => c.status === "Pending"
    ).length;

    const resolved = complaints.filter(
      (c) => c.status === "Resolved"
    ).length;

    const progress = complaints.filter(
      (c) => c.status === "In Progress"
    ).length;

    const rejected = complaints.filter(
      (c) => c.status === "Rejected"
    ).length;

    return {
      total,
      pending,
      resolved,
      progress,
      rejected,
    };
  }, [complaints]);

  return {
    complaints,
    stats,
  };
}