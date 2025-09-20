"use client";

import React from "react"
import { usePopUp } from '@/hooks/usePopUp'
import PopUp from '@/components/popup/PopUp'
import PopUpButton from '@/components/popup/PopUpButton'
import CloseButton from '@/components/ui/CloseButton'
import Form from '@/components/ui/Form'


export default function Review() {
  const { isOpen, open, close } = usePopUp('review');

  return (
    <>
      <PopUpButton onClick={open} className="review__open-btn">
        Оставить отзыв
      </PopUpButton>

      <PopUp isOpen={isOpen} onClose={close}>
        <div className="review">
          <CloseButton onClick={close} className="review__close" />
          <Form
            onClose={close}
            title={<>Отправьте отзыв<br/>о Baklen Method сейчас!</>}
            commentPlaceholder="Ваш отзыв"
            buttonText="Отправить отзыв"
            successMessage={<>Спасибо за отзыв!</>}
          />
        </div>
      </PopUp>
    </>
  );
}