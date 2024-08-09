import { ProductService } from '@/services/product';
import { NextRequest, NextResponse } from 'next/server';

const productService = new ProductService();

export async function GET(req: NextRequest, res: NextResponse) {
  const queryParams = req.nextUrl.searchParams as any;
  const { limit, page, keyword, order } = queryParams;
  const data = await productService.getList(limit, page, keyword, order);

  if (data) return Response.json(data);
  return Response.json([]);
}
