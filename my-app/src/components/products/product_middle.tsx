import { ProductItemProps } from '@/app/products/[slug]/page';
import React, { Fragment, useEffect, useState } from 'react';
import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

export default function ProductMiddle({ item }: { item: ProductItemProps }) {
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
          <p className='text-gray-500'>Sold {sold || 0}</p>
        </div>
        <h3 className='mt-2'>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(price)}</h3>
      </div>
      <div className='bg-white rounded-md p-2 mt-2'>
        <h5>Details</h5>
        <div className='flex'>
          <div className='grid grid-cols-2 w-full'>
            {item?.productMetadata?.length &&
              item.productMetadata.map((data) => {
                return (
                  <Fragment>
                    <div className='col-start-1 col-span-1 ml-0' key={data.attributes.id}>
                      {data.attributes.name}
                    </div>
                    <div className='col-start-2 col-span-1 mr-0' key={data.id}>
                      {data.value}
                    </div>
                  </Fragment>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
