import React from 'react';
import Link from 'next/link';
import './Breadcrumbs.styles.scss';

export const Breadcrumbs = ({ items }) => {
  return (
    <div className="container">
      {items.map(i => (
        <div key={i.href} className="item">
          <Link href={i.href}>
            <p className="path">{i.label}</p>
          </Link>
          <p className="divider">/</p>
        </div>
      ))}
    </div>
  );
};
