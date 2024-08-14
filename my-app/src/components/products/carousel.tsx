import React, { Fragment, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imgInit = 'https://i.pinimg.com/736x/05/b4/fb/05b4fbc3f169175e6deb97b3977175b6.jpg';
const itemInit = Array(6).fill({ id: '0', url: imgInit });

export const ProductCarousel = ({ itemList }: { itemList: Array<{ id: string; url: string }> }) => {
  const [imgUrl, setImgUrl] = useState('');
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const handleClickImg = (img: string) => {
    setImgUrl(img);
  };

  return (
    <div className='carousel_product'>
      <img
        className='w-full aspect-square p-r0 mx-auto rounded-md'
        src={imgUrl ? imgUrl : itemList?.length ? itemList[0].url : imgInit}
        alt=''
      />
      <div className='slider-container mt-1 relative'>
        <Slider {...settings}>
          {itemList?.length
            ? itemList.map((item) => (
                <img
                  className='w-16 aspect-square rounded-md border border-gray-400'
                  src={item.url}
                  key={item.id}
                  onClick={() => handleClickImg(item.url)}
                />
              ))
            : itemInit.map((item) => (
                <img
                  className='w-16 aspect-square rounded-md border border-gray-400'
                  src={item.url}
                  key={item.id}
                  onClick={() => handleClickImg(item.url)}
                />
              ))}
        </Slider>
      </div>
    </div>
  );
};
