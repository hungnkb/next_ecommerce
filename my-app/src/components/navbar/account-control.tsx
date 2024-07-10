import { UserInfoType } from '@/common/type-response';
import React from 'react';
import { Avatar, AvatarGroup, AvatarIcon } from '@nextui-org/avatar';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { clearAuth } from '@/redux/features/auth-reducer';
import { alertToast } from '@/common/alert';
import { MessageEnum } from '@/common/message';

export const AccountControl = ({ userInfo }: { userInfo: UserInfoType }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    dispatch(clearAuth());
    alertToast({ type: 'success', message: MessageEnum.SUCCESS });
  };
  return (
    <div className='flex gap-2 items-center'>
      <Dropdown placement='bottom-start'>
        <DropdownTrigger>
          <User
            as='button'
            avatarProps={{
              isBordered: true,
              src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            }}
            className='transition-transform'
            name={userInfo.name}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label='User Actions' variant='flat'>
          <DropdownItem key='profile' className='h-14 gap-2'>
            <p className='font-bold'>Signed in as</p>
            <p className='font-bold'>@${userInfo.username}</p>
          </DropdownItem>
          <DropdownItem key='settings'>My Settings</DropdownItem>
          <DropdownItem key='team_settings'>Team Settings</DropdownItem>
          <DropdownItem key='analytics'>Analytics</DropdownItem>
          <DropdownItem key='system'>System</DropdownItem>
          <DropdownItem key='configurations'>Configurations</DropdownItem>
          <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
          <DropdownItem key='logout' color='danger' onPress={handleLogout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
