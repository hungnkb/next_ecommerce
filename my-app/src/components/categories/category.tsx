'use client';
import React, { useEffect, useState } from 'react';
import { CategoryWrapper } from './categoryWrapper';
import { Listbox, ListboxItem } from '@nextui-org/react';
import { Skeleton } from '@nextui-org/react';
import axios from 'axios';

type CategoryItem = {
  id: string;
  name: string;
  slug: string;
  img: string;
};

type Param = {
  parentId?: string | null;
  page: number;
  limit: number;
};

export const Category = () => {
  const [categoryList, setCategoryList] = useState<Array<CategoryItem>>([]);
  const [params, setParams] = useState<Param>({ parentId: null, page: 1, limit: 1000 });
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get('/api/categories', {
        params,
      });
      if (res?.data?.length) {
        setCategoryList(res.data);
        setIsLoaded(!isLoaded);
      }
    };
    fetch();
  }, [params]);

  const changeParam = (parentId: string) => {
    setParams({ ...params, parentId });
  };

  return isLoaded ? (
    <CategoryWrapper>
      {
        <Listbox items={categoryList} aria-label='Dynamic Actions'>
          {(item) => (
            <ListboxItem
              key={item.slug}
              className={'text-wrap'}
              startContent={<img src={item.img} className='w-8' />}
              onPress={() => changeParam(item.id)}
              textValue='test1'
            >
              <p className='text-wrap'>{item.name}</p>
            </ListboxItem>
          )}
        </Listbox>
      }
    </CategoryWrapper>
  ) : (
    // <CategoryWrapper>
    <div className='p-1'>
      {
        <Listbox aria-label='Dynamic Actions'>
          {Array(10)
            .fill({})
            .map((_, index) => (
              <ListboxItem
                key={'itemListCategory_key_' + index}
                className={'text-wrap'}
                startContent={
                  <Skeleton className='w-8 h-8 rounded-lg'>
                    <img src={''} className='w-8'></img>
                  </Skeleton>
                }
                textValue='test2'
              >
                <Skeleton className='rounded-lg'>
                  <p className='text-wrap'>skeleton</p>
                </Skeleton>
              </ListboxItem>
            ))}
        </Listbox>
      }
    </div>
    // </CategoryWrapper>
  );
};
