const STORAGE_KEY = "smart_swachhata_complaints";

// Get all complaints
export const getComplaints = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Add a complaint
export const addComplaint = (complaint) => {
  const complaints = getComplaints();

  const newComplaint = {
    id: Date.now(),
    status: "Pending",
    createdAt: new Date().toLocaleString(),
    ...complaint,
  };

  complaints.push(newComplaint);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(complaints));
};

// Update complaint
export const updateComplaint = (id, updatedComplaint) => {
  const complaints = getComplaints().map((complaint) =>
    complaint.id === id
      ? { ...complaint, ...updatedComplaint }
      : complaint
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(complaints));
};

// Delete complaint
export const deleteComplaint = (id) => {
  const complaints = getComplaints().filter(
    (complaint) => complaint.id !== id
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(complaints));
};