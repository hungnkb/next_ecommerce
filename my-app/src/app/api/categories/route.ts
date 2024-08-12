import { CategoryService } from '@/services/categories';
import { NextRequest, NextResponse } from 'next/server';

const categoryService = new CategoryService();

export async function GET(req: NextRequest, res: NextResponse) {
  const queryParams = req.nextUrl.searchParams as any;
  const { limit, page, parentId } = queryParams;
  const data = await categoryService.getList(page, limit, parentId);

  if (data) return Response.json(data);
  return Response.json([]);
}
