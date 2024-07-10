import React, { Fragment, useState } from 'react';
import { AuthModalType } from './auth-modal';
import { Button, Checkbox, Input, Link, ModalBody, ModalFooter, ModalHeader, Spinner } from '@nextui-org/react';
import { classNamePointerUnderline } from '@/common/constant';
import { validateErrorEnum } from '@/common/validate-error';
import { FormSignupType } from './signup-modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EyeSlashFilledIcon } from '../icons/eye-slash-filled-icon';
import { EyeFilledIcon } from '../icons/eye-filled-icon';
import { authService } from '@/services/auth';
import { LoginResponseType } from '@/common/type-response';
import { useDispatch } from 'react-redux';
import { updateInfo } from '@/redux/features/auth-reducer';

type propType = {
  setFormModalType: React.Dispatch<React.SetStateAction<AuthModalType>>;
  onClose: () => void;
};

export type FormLoginType = {
  username: string;
  password: string;
};

export const LoginModal = ({ setFormModalType, onClose }: propType) => {
  const [keyInvalid, setKeyInvalid] = useState([] as string[]);
  const [isFetch, setIsFetch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormSignupType>();

  const onSubmit: SubmitHandler<FormSignupType> = async (data) => {
    setIsFetch(true);
    const res: LoginResponseType | null = await authService.login(data);
    setIsFetch(false);
    if (res) {
      localStorage.setItem('accessToken', res.accessToken);
      dispatch(updateInfo({ isLogin: true }));
      onClose();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader className='flex flex-col gap-1'>Login</ModalHeader>
        <ModalBody>
          <Input
            autoFocus
            // endContent={<MailIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />}
            label='Username'
            placeholder='Enter username'
            variant='bordered'
            // onChange={(e) => handleOnchangeForm({ ...form, username: e.target.value })}
            validate={() => {
              if (keyInvalid.includes('username')) return validateErrorEnum.USERNAME_REQUIRED;
              return true;
            }}
            {...register('username', { required: true })}
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
            placeholder='Enter password'
            type={isVisible ? 'type' : 'password'}
            validate={() => {
              if (keyInvalid.includes('password')) return validateErrorEnum.PASSWORD_REQUIRED;
              return true;
            }}
            variant='bordered'
            // onChange={(e) => handleOnchangeForm({ ...form, password: e.target.value })}
            {...register('password', { required: true })}
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
          <div className={classNamePointerUnderline} onClick={() => setFormModalType(AuthModalType.SIGNUP)}>
            Don't have account? Signup now
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color='danger' variant='light' onPress={onClose}>
            Close
          </Button>
          <Button type='submit' color='primary'>
            {isFetch ? <Spinner color='default' size='sm' /> : 'Submit'}
          </Button>
        </ModalFooter>
      </form>
    </div>
  );
};
