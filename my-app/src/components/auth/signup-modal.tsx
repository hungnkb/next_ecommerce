import React, { useEffect, useState } from 'react';
import { AuthModalType } from './auth-modal';
import { ModalBody, ModalHeader, Checkbox, Input, Link, ModalFooter, Button } from '@nextui-org/react';
import { classNamePointerUnderline } from '@/common/constant';
import { EyeSlashFilledIcon } from '../icons/eye-slash-filled-icon';
import { EyeFilledIcon } from '../icons/eye-filled-icon';
import { validateErrorEnum } from '@/common/validate-error';
import { useForm, SubmitHandler } from 'react-hook-form';
import { authService } from '@/services/auth';
import { Spinner } from '@nextui-org/react';

export type FormSignupType = {
  username: string;
  password: string;
  isShop: boolean;
};

type propType = {
  setFormModalType: React.Dispatch<React.SetStateAction<AuthModalType>>;
  onClose: () => void;
};

export const SignupModal = ({ setFormModalType, onClose }: propType) => {
  const [isVisible, setIsVisible] = useState(false);
  const [keyInvalid, setKeyInvalid] = useState([] as string[]);
  const [isFetch, setIsFetch] = useState(false);

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
    data.isShop = true;
    const res = await authService.register(data);
    setIsFetch(false);
    if (res) {
      onClose();
    }
  };    

  useEffect(() => {
    const listInvalid = Object.keys(errors);
    setKeyInvalid([...listInvalid]);
  }, [errors.username, errors.password]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader className='flex flex-col gap-1'>Signup</ModalHeader>
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
          <div className={classNamePointerUnderline} onClick={() => setFormModalType(AuthModalType.LOGIN)}>
            Already have account? Login now
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
