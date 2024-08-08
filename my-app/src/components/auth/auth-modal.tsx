import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { LoginModal } from './login-modal';
import { SignupModal } from './signup-modal';

export enum AuthModalType {
  SIGNUP,
  LOGIN,
}

export const AuthModal = ({ isOpenAuthModal }: { isOpenAuthModal: boolean }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formModalType, setFormModalType] = useState(AuthModalType.LOGIN);

  useEffect(() => {
    if (isOpenAuthModal) {
      onOpen();
    }
  }, [isOpenAuthModal]);

  return (
    <>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={true} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              {formModalType === AuthModalType.LOGIN ? (
                <LoginModal setFormModalType={setFormModalType} onClose={onClose} />
              ) : (
                <SignupModal setFormModalType={setFormModalType} onClose={onClose}/>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
