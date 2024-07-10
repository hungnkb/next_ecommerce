import { UserInfoType } from '@/common/type-response';
import React from 'react';
import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/avatar';

export const AccountControl = ({ userInfo }: { userInfo: UserInfoType }) => {
  console.log(userInfo);

  return (
    <div className='flex gap-2 items-center'>
      <p>{userInfo.username}</p>
      <Avatar size='sm' showFallback src='https://images.unsplash.com/broken' />
    </div>
  );
};
