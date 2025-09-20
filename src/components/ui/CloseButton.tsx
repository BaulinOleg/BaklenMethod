import React, {MouseEventHandler} from 'react';

interface CloseButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
}

export default function CloseButton(
  {
    onClick,
    className = '',
    icon,
    ariaLabel = 'Закрыть',
  }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`close ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {icon ?? <DefaultIcon/>}
    </button>
  );
}

// SVG-иконка по умолчанию (если не передали icon)
function DefaultIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
      <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
