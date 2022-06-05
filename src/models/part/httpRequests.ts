import axios from 'axios';
import { Part } from './Part';

const url = 'http://localhost:8081/store';

const message = 'Something went wrong.';

export const getMultipleParts = async (query: string, type: string) => {
  try {
    const params = { query, type };
    return await axios.get<Part[]>(`${url}/parts`, { params });
  } catch (error) {
    alert(message);
    return null;
  }
};

export const getSinglePart = async (id: string) => {
  try {
    return await axios.get<Part>(`${url}/parts/${id}`);
  } catch (error) {
    alert(message);
    return null;
  }
};

export const getMultipleTypes = () => {
  try {
    return axios.get<string[]>(`${url}/part-types`);
  } catch (error) {
    alert(message);
  }
};
