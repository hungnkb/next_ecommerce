'use client';
import React, { useEffect, useState } from 'react';
import { CardDetailType, CardDetail } from './card-detail';
import { Skeleton } from '@nextui-org/skeleton';
import { Card } from '@nextui-org/react';
import axios from 'axios';

const skeletonList = Array(24).fill(0);

const CardList = () => {
  const [list, setList] = useState([] as CardDetailType[]);
  useEffect(() => {
    if (!list?.length) {
      const fetch = async () => {
        const res = await axios.get('/api/products');
        if (res?.data?.length) {
          setList(res.data);
        }
      };
      fetch();
    }
  }, []);

  return (
    <>
      <div className='grid grid-cols-6 gap-1 max-xs:grid-cols-1'>
        {list?.length
          ? list.map((item, index) => {
              return <CardDetail key={index} props={item} />;
            })
          : skeletonList.map((_, index: number) => (
              <Card
                key={index}
                className='space-y-5 p-4 border-solid border-1 border-slate-200'
                shadow='none'
                radius='lg'
              >
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
