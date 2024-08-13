'use client';
import { ProductCarousel } from '@/components/products/carousel';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

type ProductItem = {
  id: string;
  name: string;
  slug: string;
  description: string;
  accountId: string;
  price: number;
  thumbnailId: string;
};

function Products({ params }: { params: { slug: string } }) {
  const [item, setItem] = useState<ProductItem>({ id: '' } as ProductItem);
  const { slug } = params;
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`/api/products/${slug}`);
      if (res.data) {
        setItem(res.data);
        console.log(111, res.data);
      }
    };
    fetch();
  }, [slug]);
  return (
    <div className='grid grid-cols-6 gap-1'>
      <div className='col-start-1 col-span-1 bg-red-300 p-4 rounded-md'></div>
      <div className='col-start-2 col-span-1 bg-blue-400 rounded-md'>
        <ProductCarousel />
      </div>
      <div className='col-start-3 col-span-2 bg-purple-300 rounded-md'></div>
      <div className='col-start-5 col-span-1 bg-yellow-300 rounded-md'></div>
      <div className='col-start-6 col-span-1 bg-black rounded-md'></div>
    </div>
  );
}

export default Products;
