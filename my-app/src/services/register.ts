import { AxiosInstance } from './axios-instance';

class RegisterService {
  private url: string;
  constructor() {
    this.url = '/auth/register';
  }
  async run(data: any) {
    const res = await AxiosInstance.getInstance().post(this.url, data, {
      validateStatus: (status: number) => status < 500,
    });
    if (res?.data?.data) return res.data.data;
    console.log('RegisterService.run', res.data.message);
    return res.data.message;
  }
}

export const registerService = new RegisterService();
