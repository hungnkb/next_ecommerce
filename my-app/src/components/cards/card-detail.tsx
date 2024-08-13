import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import React from 'react';
import { useRouter } from 'next/navigation';

export type CardDetailType = {
  name: string;
  price: number;
  documents: Array<{ id: string; url: string }>;
  thumbnailId: string;
  slug: string;
};

export const CardDetail = ({ props }: { props: CardDetailType }) => {
  const { name, price, thumbnailId, documents, slug } = props;
  const router = useRouter();

  const thumbnail = documents.find((doc) => doc.id === thumbnailId);

  const handleClickDetail = () => {
    router.push(`/products/${slug}`);
  };

  return (
    <Card className={'flex py-4 gap-x-32 border-solid border-1 border-slate-200'} shadow='none'>
      <CardBody className='overflow-visible py-2 items-center' onClick={handleClickDetail}>
        <Image
          alt='Card background'
          className='object-cover rounded-xl aspect-square w-44'
          src={thumbnail?.url ?? 'https://nextui.org/images/hero-card-complete.jpeg'}
        />
      </CardBody>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start' onClick={handleClickDetail}>
        <h4 className='font-bold text-large text-price'>
          {new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(price)}
        </h4>
        <p className='text-tiny uppercase font-bold line-clamp-3'>{name}</p>
        <small className='text-default-500'>Selled: </small>
      </CardHeader>
    </Card>
  );
};
