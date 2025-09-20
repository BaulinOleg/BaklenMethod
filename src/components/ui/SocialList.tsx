import React from 'react'
import Link from 'next/link'
import Icon from './icons/Icon'
import { ICON_PATHS, SocialPlatform } from './icons/iconPaths'


interface SocialItem {
  href: string;
  platform: SocialPlatform;
  label: string;
}

interface SocialListProps {
  className?: string;
  items?: SocialItem[];
}

const defaultItems: SocialItem[] = [
  {
    href: 'tel:+79909090',
    platform: 'vk',
    label: 'Позвонить через VK',
  },
  {
    href: 'tel:+79909090',
    platform: 'telegram',
    label: 'Позвонить через Telegram',
  },
  {
    href: 'tel:+79909090',
    platform: 'whatsapp',
    label: 'Позвонить через WhatsApp',
  },
];

export default function SocialList({ className = '', items = defaultItems }: SocialListProps) {
  return (
    <ul className={`social-list ${className}`} role='list'>
      {items.map(({ href, platform, label }) => (
        <li key={platform} className="social-list__item">
          <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon pathData={ICON_PATHS[platform]} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
