import axios from 'axios';

export const cms = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_TOKEN}`
  }
});
