import axios, { AxiosHeaders } from 'axios';

export class AxiosInstance {
  static getInstance(baseUrl?: string, token?: string) {
    const headers: any = { 'Content-Type': 'application/json' };
    if (token) {
      headers['Authorization'] = token;
    }
    return axios.create({
      baseURL: baseUrl || process.env.NEXT_PUBLIC_SERVER_URL,
      headers,
      validateStatus: (status: number) => {
        return status < 500;
      },
    });
  }
}
