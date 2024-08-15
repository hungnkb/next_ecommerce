import { ProductItemProps } from '@/app/products/[slug]/page';
import React, { useState } from 'react';
import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

export default function ProductMiddle({ item }: { item: ProductItemProps }) {
  console.log(item);

  const [rating, setRating] = useState(5);
  const { name, price, sold } = item;
  return (
    <div>
      <div className='bg-white rounded-md p-2'>
        <h4>{name ?? ''}</h4>
        <div className='flex gap-1'>
          <Rating
            value={rating}
            onChange={setRating}
            itemStyles={{ itemShapes: ThinRoundedStar, activeFillColor: '#FFC400', inactiveFillColor: '#ffedd5' }}
            className='max-w-28'
          />
          <p className='text-gray-500'>|</p>
          <p className='text-gray-500'>Đã bán {sold || 0}</p>
        </div>
        <h3 className='mt-2'>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(price)}</h3>
      </div>
      <div className='bg-white rounded-md p-2 mt-2'>
        <h5>Thông tin chi tiết</h5>
        <div className='flex'>
          <div className='grid grid-cols-2'>
            <div className='col-start-1 col-span-1'>Thương hiệu</div>
            <div className='col-start-2 col-span-1'>Hihihaha</div>
          </div>
        </div>
      </div>
    </div>
  );
}
