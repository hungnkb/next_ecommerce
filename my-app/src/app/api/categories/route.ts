import { CategoryService } from '@/services/categories';
import { NextRequest, NextResponse } from 'next/server';

const categoryService = new CategoryService();

export async function GET(req: NextRequest, res: NextResponse) {
  const queryParams = {} as any;
  req.nextUrl.searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });
  const { page, limit, parentId } = queryParams;
  const data = await categoryService.getList(page, limit, parentId);

  if (data) return Response.json(data);
  return Response.json([]);
}
