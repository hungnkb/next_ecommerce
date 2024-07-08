import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import React from 'react';

export type CardDetailType = {
  title: string;
  price: number;
  imageSrc?: string;
};

export const CardDetail = ({ props }: { props: CardDetailType }) => {
  const { title, price, imageSrc } = props;

  return (
    <Card className={'flex py-4 gap-x-32'}>
      <CardBody className='overflow-visible py-2'>
        <Image
          alt='Card background'
          className='object-cover rounded-xl'
          src={imageSrc ?? 'https://nextui.org/images/hero-card-complete.jpeg'}
          width={180}
        />
      </CardBody>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-tiny uppercase font-bold'>{title}</p>
        <small className='text-default-500'>Tạm thời để đây</small>
        <h4 className='font-bold text-large'>{price}</h4>
      </CardHeader>
    </Card>
  );
};
