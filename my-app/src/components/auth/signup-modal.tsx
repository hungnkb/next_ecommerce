import React, { useState } from 'react';
import { AuthModalType } from './auth-modal';
import { ModalBody, ModalHeader, Checkbox, Input, Link } from '@nextui-org/react';
import { classNamePointerUnderline } from '@/common/constant';
import { EyeSlashFilledIcon } from '../icons/eye-slash-filled-icon';
import { EyeFilledIcon } from '../icons/eye-filled-icon';

type FormSignupType = {
  username: string;
  password: string;
};

export const SignupModal = ({
  setFormModalType,
}: {
  setFormModalType: React.Dispatch<React.SetStateAction<AuthModalType>>;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState<FormSignupType>({ username: '<<<!empty!>>>', password: '<<<!empty!>>>' });
  const [keyInvalid, setKeyInvalid] = useState([] as string[]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const isInvalid = React.useMemo(() => {
    let keyInvalidList: string[] = [];
    if (
      Object.keys(form).some((key) => {
        const conditionInvalid = form[key as keyof typeof form] !== '<<<!empty!>>>' && !form[key as keyof typeof form];
        console.log(form[key as keyof typeof form], conditionInvalid );
        
        if (conditionInvalid) {
          keyInvalidList.push(key);
        }
        return !conditionInvalid;
      })
    ) {
      setKeyInvalid(keyInvalidList);
      return false;
    } else {
      return true;
    }
    // return validateEmail(value) ? false : true;
  }, [form]);

  return (
    <div>
      <ModalHeader className='flex flex-col gap-1'>Signup</ModalHeader>
      <ModalBody>
        <Input
          autoFocus
          // endContent={<MailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />}
          label='Username'
          placeholder='Enter username'
          variant='bordered'
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          isInvalid={keyInvalid.includes('username') ? false : true}
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
          label='Password'
          placeholder='Enter your password'
          type={isVisible ? 'type' : 'password'}
          variant='bordered'
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          isInvalid={keyInvalid.includes('password') ? false : true}
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
    </div>
  );
};
