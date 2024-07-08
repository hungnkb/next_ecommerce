'use client';
import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';

export enum menuTypeEnum {
  TEXT = 'text',
  BUTTON = 'button',
}

export type menuType = {
  title: string;
  key: string;
  type: menuTypeEnum;
  link: string;
};

export const NavbarComponent = () => {
  const [isActive, setIsActive] = useState('');

  const menuList: menuType[] = [
    { title: 'Menu 1', key: 'menu1', type: menuTypeEnum.TEXT, link: '#' },
    { title: 'Menu 2', key: 'menu2', type: menuTypeEnum.TEXT, link: '#' },
    { title: 'Menu 3', key: 'menu3', type: menuTypeEnum.TEXT, link: '#' },
  ];

  const setActiveMenu = (key: string) => {
    setIsActive(key);
  };

  return (
    <Navbar maxWidth='xl'>
      <NavbarBrand>
        <p className='font-bold text-inherit'>Logo</p>
      </NavbarBrand>
      <NavbarContent className='flex gap-4' justify='center'>
        {menuList.map((item) => {
          if (item.type === menuTypeEnum.TEXT) {
            return (
              <NavbarItem key={item.key} isActive={isActive === item.key}>
                <Link href={item.link} onPress={() => setActiveMenu(item.key)}>
                  {item.title}
                </Link>
              </NavbarItem>
            );
          }
        })}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Đăng nhập
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
