import axios from 'axios';
import {API_KEY} from '@env'


const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest';

export const fetchExchangeRates = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { access_key: API_KEY }
    });
    
    if (!response.data.success) {
      throw new Error(response.data.error?.info || 'Failed to fetch rates');
    }
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};