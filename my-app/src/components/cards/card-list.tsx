'use client';
import React, { useEffect, useState } from 'react';
import { CardDetailType, CardDetail } from './card-detail';
import { Skeleton } from '@nextui-org/skeleton';
import { Card } from '@nextui-org/react';

const skeletonList = Array(25).fill(0);

const CardList = () => {
  const [list, setList] = useState([] as CardDetailType[]);
  useEffect(() => {
    if (!list?.length) {
      // setList([
      //   { title: 'Sản phẩm test 1', price: 123456 },
      //   { title: 'Sản phẩm test 2', price: 678345 },
      //   { title: 'Sản phẩm test 1', price: 123456 },
      //   { title: 'Sản phẩm test 2', price: 678345 },
      // ]);
    }
  }, []);

  return (
    <>
      <div className='flex flex-row gap-2 flex-wrap justify-between'>
        {list?.length
          ? list.map((item, index) => {
              return <CardDetail key={index} props={item} />;
            })
          : skeletonList.map((_, index: number) => (
              <Card key={index} className='w-[200px] space-y-5 p-4' radius='lg'>
                <Skeleton className='rounded-lg'>
                  <div className='h-24 rounded-lg bg-default-300'></div>
                </Skeleton>
                <div className='space-y-3'>
                  <Skeleton className='w-3/5 rounded-lg'>
                    <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
                  </Skeleton>
                  <Skeleton className='w-4/5 rounded-lg'>
                    <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
                  </Skeleton>
                  <Skeleton className='w-2/5 rounded-lg'>
                    <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
                  </Skeleton>
                </div>
              </Card>
            ))}
      </div>
    </>
  );
};

export default CardList;
