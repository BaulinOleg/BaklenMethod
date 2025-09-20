import React from 'react';

interface IconProps {
  pathData: string;
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

export default function Icon(
  {
    pathData,
    width = 36,
    height = 36,
    fill = 'currentColor',
    className = '',
  }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className={`icon ${className}`}
      viewBox="0 0 32 32"
    >
      <path d={pathData} fill={fill} fillOpacity="0.71" fillRule="evenodd" clipRule="evenodd"/>
    </svg>
  );
}
