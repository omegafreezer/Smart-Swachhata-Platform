import axios from "axios";

const API = "http://localhost:5000/api/complaints";

// Get all complaints
export const getComplaints = async () => {
  const response = await axios.get(API);
  return response.data.data;
};

// Get single complaint
export const getComplaint = async (id) => {
  const response = await axios.get(`${API}/${id}`);
  return response.data.data;
};

// Add complaint
export const addComplaint = async (complaint) => {
  const response = await axios.post(API, complaint);
  return response.data;
};

// Update complaint
export const updateComplaint = async (id, complaint) => {
  const response = await axios.put(`${API}/${id}`, complaint);
  return response.data;
};

// Delete complaint
export const deleteComplaint = async (id) => {
  const response = await axios.delete(`${API}/${id}`);
  return response.data;
};

export const getDashboardStats = async () => {
  const response = await axios.get(`${API}/analytics/dashboard`);
  return response.data.data;
};

export const getCategoryStats = async () => {
  const response = await axios.get(
    `${API}/analytics/category`
  );

  return response.data.data;
};