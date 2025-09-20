'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

export function usePopUp(name: string) {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isInitiallyOpen = searchParams.get('popup') === name;
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  //  добавим флаг, чтобы предотвратить повторное открытие
  const isManuallyClosed = useRef(false);

  const open = useCallback(() => {
    const newParams = new URLSearchParams(Array.from(searchParams.entries()));
    newParams.set('popup', name);
    const newUrl = `${pathname}?${newParams.toString()}`;
    window.history.replaceState(null, '', newUrl);
    setIsOpen(true);
    isManuallyClosed.current = false;
  }, [name, pathname, searchParams]);

  const close = useCallback(() => {
    console.log('close called');
    const newParams = new URLSearchParams(Array.from(searchParams.entries()));
    newParams.delete('popup');
    const hash = window.location.hash;
    const newUrl = `${pathname}?${newParams.toString()}${hash}`;
    window.history.replaceState(null, '', newUrl);
    setIsOpen(false);
    isManuallyClosed.current = true;
  }, [pathname, searchParams]);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  // обновляем `isOpen`, если URL поменялся, но только если попап не был вручную закрыт
  useEffect(() => {
    const shouldBeOpen = searchParams.get('popup') === name;

    if (shouldBeOpen && !isManuallyClosed.current) {
      setIsOpen(true);
    } else if (!shouldBeOpen) {
      setIsOpen(false);
      isManuallyClosed.current = false;
    }
  }, [searchParams, name]);

  return { isOpen, open, close, toggle };
}
