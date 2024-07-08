import React, { Fragment } from 'react';
import { AuthModalType } from './auth-modal';
import { ModalBody, ModalHeader } from '@nextui-org/react';
import { classNamePointerUnderline } from '@/common/constant';

export const LoginModal = ({
  setFormModalType,
}: {
  setFormModalType: React.Dispatch<React.SetStateAction<AuthModalType>>;
}) => {
  return (
    <div>
      <ModalHeader className='flex flex-col gap-1'>Login</ModalHeader>
      <ModalBody>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis.
          Pellentesque sit amet hendrerit risus, sed porttitor quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis.
          Pellentesque sit amet hendrerit risus, sed porttitor quam.
        </p>
        <p>
          Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor
          eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
          eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
          deserunt nostrud ad veniam.
        </p>
        <div className={classNamePointerUnderline} onClick={() => setFormModalType(AuthModalType.SIGNUP)}>
          Chưa có tài khoản? Đăng ký ngay
        </div>
      </ModalBody>
    </div>
  );
};
