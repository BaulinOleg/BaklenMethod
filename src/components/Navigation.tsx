'use client';

import React, {useEffect, useState} from 'react'
import {usePathname} from 'next/navigation'
import {navLinks} from '@/constants/navLinks'
import Link from 'next/link'


interface NavigationProps {
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  linkClassName?: string;
  activeClassName?: string;
  onNavigate?: () => void;
}

export default function Navigation(
  {
    className = '',
    listClassName = '',
    itemClassName = '',
    linkClassName = '',
    activeClassName = 'active',
    onNavigate,
  }: NavigationProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    });

    const sectionIds = navLinks.map((link) => link.href.slice(1));
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname, isHomePage]);

  // для сброса activeSection при скролле наверх
  useEffect(() => {
    if (!isHomePage) return;

    const onScroll = () => {
      if (window.scrollY < 50) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isHomePage]);

  return (
    <nav className={`nav ${className}`.trim()}>
      <ul className={`nav__list ${listClassName}`.trim()} role="list">
        {navLinks.map(({href, label}) => {
          const linkHref = isHomePage ? href : `/${href}`;

          const isActive = isHomePage ? href === activeSection : false;

          return (
            <li key={href} className={`nav__item ${itemClassName}`.trim()}>
              <Link
                href={linkHref}
                className={`nav__link ${linkClassName} ${isActive ? activeClassName : ''}`.trim()}
                onClick={() => onNavigate?.()}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
