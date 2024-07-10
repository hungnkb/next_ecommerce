import { alertToast } from '@/common/alert';
import { AxiosInstance } from './axios-instance';

class AuthService {
  private registerUrl: string;
  private loginUrl: string;
  private getMeUrl: string;
  constructor() {
    this.registerUrl = '/auth/register';
    this.loginUrl = '/auth/login';
    this.getMeUrl = '/accounts/me';
  }
  async register(data: any) {
    const res = await AxiosInstance.getInstance().post(this.registerUrl, data, {
      validateStatus: (status: number) => status < 500,
    });
    if (res?.data?.data) return res.data.data;
    alertToast('error', res.data.message);
    return null;
  }

  async login(data: any) {
    const res = await AxiosInstance.getInstance().post(this.loginUrl, data, {
      validateStatus: (status: number) => status < 500,
    });
    if (res?.data?.data) {
      alertToast('success', 'Đăng nhập thành công');
      return res.data.data;
    }
    alertToast('error', res.data.message);
    return null;
  }

  async getMe(token: string) {
    const res = await AxiosInstance.getInstance(token).get(this.getMeUrl);
    if (res?.data?.data) return res.data.data;
    return null;
  }
}

export const authService = new AuthService();
