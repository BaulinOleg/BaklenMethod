'use client';

import { usePopUp } from '@/hooks/usePopUp'
import PopUp from './popup/PopUp'
import PopUpButton from './popup/PopUpButton'
import CloseButton from './ui/CloseButton'
import Navigation from './Navigation'
import Image from "next/image"


export default function Burger() {
  const { isOpen, open, close } = usePopUp('burger');

  return (
    <>
      <PopUpButton onClick={open} className="burger__open-btn">
        <Image
          src="/icons/burger.svg"
          alt="Меню навигации"
          width={52}
          height={15}
        />
      </PopUpButton>

      <PopUp isOpen={isOpen} onClose={close}>
        <div className="burger">
          <div className="burger__wrapper">
            <CloseButton onClick={close} className="burger__close" />
            <Navigation
              className="burger__nav"
              listClassName="burger__list"
              itemClassName="burger__item"
              linkClassName="burger__link"
              activeClassName="burger__link--active"
              onNavigate={close}
            />
          </div>
        </div>
      </PopUp>
    </>
  );
}
