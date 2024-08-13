'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Button } from '@nextui-org/react';
import { AuthModal } from '../auth/auth-modal';
import { useSelector } from 'react-redux';
import { UserInfoType } from '@/common/type-response';
import { RootState } from '@/redux/store';
import { AccountControl } from './account-control';
import { SearchIcon } from './search-input';
import { useRouter } from 'next/navigation';

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
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
  const authState = useSelector((state: RootState) => state.auth);
  const route = useRouter();
  const menuList: menuType[] = [
    { title: 'Menu 1', key: 'menu1', type: menuTypeEnum.TEXT, link: '#' },
    { title: 'Menu 2', key: 'menu2', type: menuTypeEnum.TEXT, link: '#' },
    { title: 'Menu 3', key: 'menu3', type: menuTypeEnum.TEXT, link: '#' },
  ];

  const setActiveMenu = (key: string) => {
    setIsActive(key);
  };

  const setOpenAuthModal = (key: boolean) => {
    if (key !== isOpenAuthModal) {
      setIsOpenAuthModal(!isOpenAuthModal);
    }
  };

  useEffect(() => {
    if (isOpenAuthModal) {
      setIsOpenAuthModal(!isOpenAuthModal);
    }
  });

  const handleClickLogo = () => {
    route.push('/');
  };

  return (
    <Fragment>
      <Navbar maxWidth='2xl'>
        <NavbarBrand onClick={handleClickLogo}>
          <p className='font-bold text-inherit'>Logo</p>
        </NavbarBrand>
        <NavbarContent className='flex gap-4 max-w-full' justify='center'>
          {/* {menuList.map((item) => {
            if (item.type === menuTypeEnum.TEXT) {
              return (
                <NavbarItem key={item.key} isActive={isActive === item.key}>
                  <Link href={item.link} onPress={() => setActiveMenu(item.key)}>
                    {item.title}
                  </Link>
                </NavbarItem>
              );
            }
          })} */}
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[10rem] h-10 items-center',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 w-800',
            }}
            placeholder='Type to search...'
            size='sm'
            startContent={<SearchIcon size={18} />}
            type='search'
            fullWidth={true}
          />
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem>
            {authState.userInfo?.id ? (
              <AccountControl userInfo={authState.userInfo} />
            ) : (
              <Button
                onPress={() => setOpenAuthModal(!isOpenAuthModal)}
                href='#'
                variant='light'
                className='text-slate-500'
              >
                <img
                  src='https://salt.tikicdn.com/ts/upload/07/d5/94/d7b6a3bd7d57d37ef6e437aa0de4821b.png'
                  alt=''
                  className='w-5'
                />
                Login
              </Button>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <AuthModal isOpenAuthModal={isOpenAuthModal} />
    </Fragment>
  );
};
