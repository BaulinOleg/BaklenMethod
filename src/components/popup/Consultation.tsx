"use client";

import React from "react"
import { usePopUp } from '@/hooks/usePopUp'
import PopUp from '@/components/popup/PopUp'
import PopUpButton from '@/components/popup/PopUpButton'
import CloseButton from '@/components/ui/CloseButton'
import Form from '@/components/ui/Form'


export default function Consultation() {
  const { isOpen, open, close } = usePopUp('consultation');

  return (
    <>
      <PopUpButton onClick={open} className="consultation__open-btn">
        Получить консультацию
      </PopUpButton>

      <PopUp isOpen={isOpen} onClose={close}>
        <div className="consultation">
          <CloseButton onClick={close} className="consultation__close" />
          <Form
            onClose={close}
            title={<>Узнать больше<br/> о Baklen Method сейчас!</>}
          />
        </div>
      </PopUp>
    </>
  );
}
