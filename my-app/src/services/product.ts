import { AxiosInstance } from './axios-instance';

export class ProductService {
  private url: string;
  constructor() {
    this.url = '/products';
  }

  async getList(limit = 24, page = 1, keyword?: string, order?: string) {
    const res = await AxiosInstance.getInstance().get(this.url, {
      params: {
        limit,
        page,
        keyword,
        order,
      },
      validateStatus: (status: number) => status < 500,
    });
    console.log(111, res);

    if (res?.data) return res.data.data;
  }
}
