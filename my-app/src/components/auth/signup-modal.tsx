import React, { useState } from 'react';
import { AuthModalType } from './auth-modal';
import { ModalBody, ModalHeader, Checkbox, Input, Link, ModalFooter, Button } from '@nextui-org/react';
import { classNamePointerUnderline } from '@/common/constant';
import { EyeSlashFilledIcon } from '../icons/eye-slash-filled-icon';
import { EyeFilledIcon } from '../icons/eye-filled-icon';
import { validateErrorEnum } from '@/common/validate.error';
import { registerService } from '@/services/register';

type FormSignupType = {
  username: string;
  password: string;
};

type propType = {
  setFormModalType: React.Dispatch<React.SetStateAction<AuthModalType>>;
  onClose: () => void;
};

export const SignupModal = ({ setFormModalType, onClose }: propType) => {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState<FormSignupType>({ username: '', password: '' });
  const [isSubmit, setIsSubmit] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async () => {
    console.log(form);
    await registerService.run(form);
    setIsSubmit(true);
  };

  return (
    <div>
      <ModalHeader className='flex flex-col gap-1'>Đăng ký</ModalHeader>
      <ModalBody>
        <Input
          autoFocus
          // endContent={<MailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />}
          label='Tài khoản'
          placeholder='Nhập tài khoản'
          variant='bordered'
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          validate={(e) => {
            if (!e && isSubmit) return validateErrorEnum.USERNAME_REQUIRED;
            return true;
          }}
        />
        <Input
          endContent={
            <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
              {isVisible ? (
                <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
              ) : (
                <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
              )}
            </button>
          }
          label='Mật khẩu'
          placeholder='Nhập mật khẩu'
          type={isVisible ? 'type' : 'password'}
          validate={(e) => {
            if (!e && isSubmit) return validateErrorEnum.PASSWORD_REQUIRED;
            return true;
          }}
          variant='bordered'
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <div className='flex py-2 px-1 justify-between'>
          <Checkbox
            classNames={{
              label: 'text-small',
            }}
          >
            Remember me
          </Checkbox>
          <Link color='primary' href='#' size='sm'>
            Forgot password?
          </Link>
        </div>
        <div className={classNamePointerUnderline} onClick={() => setFormModalType(AuthModalType.LOGIN)}>
          Đã có tài khoản? Đăng nhập ngay
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color='danger' variant='light' onPress={onClose}>
          Close
        </Button>
        <Button color='primary' onClick={handleSubmit}>
          Action
        </Button>
      </ModalFooter>
    </div>
  );
};
