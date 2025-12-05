'use client';

import { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  title: string;
}

interface BlogTableOfContentsProps {
  items: TOCItem[];
}

export default function BlogTableOfContents({ items }: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-[var(--color-section)] rounded-2xl p-6 sticky top-24">
      <h3 className="font-[family-name:var(--font-heading)] text-lg font-medium text-[var(--color-text-main)] mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-[var(--color-support-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h12" />
        </svg>
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`block text-sm py-1.5 px-3 rounded-lg transition-all ${
                activeId === item.id
                  ? 'bg-[var(--color-primary)]/30 text-[var(--color-text-main)] font-medium'
                  : 'text-[var(--color-text-muted)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-text-main)]'
              }`}
            >
              <span className="text-[var(--color-support-dark)] mr-2">{(index + 1).toString().padStart(2, '0')}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}


