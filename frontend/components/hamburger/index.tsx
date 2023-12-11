'use client';

import {
  Modal, ModalContent, ModalHeader, ModalBody
} from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

import { Navigation } from '#components/navigation';

export const Hamburger = () => {
  const [isActivated, setIsActivated] = useState(false);
  const t = useTranslations('Component.Hamburger');

  const handleHamburgerMenu = useCallback(() => {
    setIsActivated((previousState) => !previousState);
  }, []);

  return (
    <>
      <button
        aria-label="Hamburger"
        className="ma-hamburger"
        type="button"
        onClick={handleHamburgerMenu}
      >
        <div className="ma-hamburger__wrapper">
          <span className="ma-hamburger__ingredient" />
        </div>
      </button>
      <Modal
        isOpen={isActivated}
        size="full"
        onOpenChange={setIsActivated}
      >
        <ModalContent>
          {
            () => (
              <>
                <ModalHeader className="ma-hamburger__header">
                  <h2 className="ma-hamburger__title">{ t('navigation') }</h2>
                </ModalHeader>
                <ModalBody>
                  <Navigation className="ma-hamburger__navigation" />
                </ModalBody>
              </>
            )
          }
        </ModalContent>
      </Modal>
    </>
  );
};
