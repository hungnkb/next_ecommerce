'use client';

import React, { useEffect, useState } from 'react';
import { CardDetailType, CardDetail } from './card-detail';

const CardList = () => {
  const [list, setList] = useState([] as CardDetailType[]);
  useEffect(() => {
    if (!list?.length) {
      setList([
        { title: 'Sản phẩm test 1', price: 123456 },
        { title: 'Sản phẩm test 2', price: 678345 },
        { title: 'Sản phẩm test 1', price: 123456 },
        { title: 'Sản phẩm test 2', price: 678345 },
      ]);
    }
  }, []);

  return (
    <>
      {/* <div className='grid grid-flow-col auto-cols-max'> */}
      <div className='flex flex-row gap-2'>
        {list?.length &&
          list.map((item, index) => {
            return <CardDetail key={index} props={item} />;
          })}
      </div>
    </>
  );
};

export default CardList;
