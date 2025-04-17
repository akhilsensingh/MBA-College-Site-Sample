'use client';
import React from 'react';
import Link from 'next/link';
import headerData from '../../data.json';

const { logo, navItems } = headerData.header;

function renderLinks(items) {
  return items.map((item, idx) =>
    item.subItems ? (
      <div key={idx} className="relative group/subitem">
        <div className="flex justify-between cursor-pointer hover:text-yellow-400">
          {item.label}
          <span className="text-xs ml-2">▶</span>
        </div>
        <div className="absolute top-0 left-full mt-0 ml-2 w-max bg-zinc-900 p-4 rounded-md shadow-lg opacity-0 invisible group-hover/subitem:opacity-100 group-hover/subitem:visible transition-all z-50">
          {renderLinks(item.subItems)}
        </div>
      </div>
    ) : (
      <Link
        key={idx}
        href={item.link}
        target={item.external ? '_blank' : '_self'}
        rel={item.external ? 'noopener noreferrer' : ''}
        className="block py-1 px-2 hover:text-yellow-400"
      >
        {item.label}
      </Link>
    )
  );
}

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="w-full py-4 flex items-center justify-between px-4">
        <div className="text-xl cursor-pointer hover:text-yellow-400 mr-30 font-bold">{logo}</div>
        <div className="flex gap-6 text-sm font-semibold">
          {navItems.map((item) => (
            <div className="relative group" key={item.title}>
              <div className="hover:text-yellow-400 cursor-pointer flex items-center gap-1">
                {item.title}
                {item.dropdown.length > 0 && <span className="text-xs">▼</span>}
              </div>
              {item.dropdown.length > 0 && (
                <div className="absolute top-full left-0 bg-zinc-900 text-white mt-2 rounded-md shadow-lg p-4 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {renderLinks(item.dropdown)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
