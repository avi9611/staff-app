import axios from 'axios';
import { StaffProfile } from '../types/staff';

const API_URL = import.meta.env.VITE_API_BASE_URL;


export const getAllStaff = async (): Promise<StaffProfile[]> => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching staff:', error);
    throw error;
  }
};

export const getStaffById = async (id: string): Promise<StaffProfile> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching staff with id ${id}:`, error);
    throw error;
  }
};

export const createStaff = async (staff: StaffProfile): Promise<StaffProfile> => {
  try {
    const response = await axios.post(`${API_URL}/`, staff);
    return response.data;
  } catch (error) {
    console.error('Error creating staff:', error);
    throw error;
  }
};

export const updateStaff = async (id: string, staff: StaffProfile): Promise<StaffProfile> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, staff);
    return response.data;
  } catch (error) {
    console.error(`Error updating staff with id ${id}:`, error);
    throw error;
  }
};

export const deleteStaff = async (id: string): Promise<void> => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error(`Error deleting staff with id ${id}:`, error);
    throw error;
  }
};