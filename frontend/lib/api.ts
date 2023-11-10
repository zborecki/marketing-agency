import axios from 'axios';

export const cmsApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_TOKEN}`
  }
});
