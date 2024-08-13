import { ProductService } from '@/services/products';
import { NextRequest, NextResponse } from 'next/server';

const productService = new ProductService();

type Params = {
  slug: string;
};

export async function GET(req: NextRequest, context: { params: Params }) {
  try {
    const { params } = context;
    const { slug } = params;
    const data = await productService.getDetail(slug);
    if (data) return NextResponse.json(data);
    throw new Error();
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
