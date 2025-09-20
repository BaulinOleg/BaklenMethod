import {ReactNode} from 'react'

interface PopUpButtonProps {
  onClick: () => void;
  className?: string;
  children?: ReactNode; // можно вставить иконку, текст
  ariaLabel?: string;
}

export default function PopUpButton(
  {
    onClick,
    className = '',
    children,
    ariaLabel,
  }: PopUpButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
