import { ProductItemProps } from '@/app/products/[slug]/page';
import React, { useState } from 'react';
import { Rating, ThinRoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

export default function ProductMiddle({ item }: { item: ProductItemProps }) {
  const [rating, setRating] = useState(5);
  const { name } = item;
  return (
    <div>
      <h4>{name ?? ''}</h4>
      <Rating
        value={rating}
        onChange={setRating}
        itemStyles={{ itemShapes: ThinRoundedStar, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' }}
        className='max-w-28'
      />
    </div>
  );
}
