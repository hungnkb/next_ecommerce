import { AxiosInstance } from './axios-instance';

export class CategoryService {
  url: string;
  constructor() {
    this.url = '/products/categories';
  }
  async getList(page = 1, limit = 1000, parentId = 'null') {
    const res = await AxiosInstance.getInstance().get(this.url, {
      params: {
        page,
        limit,
        parentId,
      },
      validateStatus: (status: number) => status < 500,
    });
    if (res?.data?.data?.length) return res.data.data;
    return [];
  }
}
