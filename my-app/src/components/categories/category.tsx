'use client';
import React, { useEffect, useState } from 'react';
import { CategoryWrapper } from './category-wrapper';
import { Button, Listbox, ListboxItem } from '@nextui-org/react';
import { Skeleton } from '@nextui-org/react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
  const [prevCategoryList, setPrevCategoryList] = useState<Array<CategoryItem[]>>([]);
  const [params, setParams] = useState<Param>({ parentId: null, page: 1, limit: 1000 });
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get('/api/categories', {
        params,
      });
      if (res?.data?.length) {
        setPrevCategoryList([categoryList]);
        setCategoryList(res.data);
        setIsLoaded(true);
      }
    };
    fetch();
  }, [params]);

  const changeParam = (id: string) => {
    setParams({ ...params, parentId: id });
  };

  const backCategoryList = () => {
    const lastIndexPrevCategory = prevCategoryList.length - 1;
    setCategoryList(prevCategoryList[lastIndexPrevCategory] ?? ([] as CategoryItem[][]));
    prevCategoryList.pop();
    setPrevCategoryList(prevCategoryList ?? ([] as CategoryItem[]));
  };

  return isLoaded ? (
    <div>
      {prevCategoryList && prevCategoryList[0]?.length ? (
        <div>
          <Button className='font-bold' variant={'light'} fullWidth={true} onPress={backCategoryList}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <p>Back</p>
          </Button>
          <hr></hr>
        </div>
      ) : (
        ''
      )}
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
    </div>
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
