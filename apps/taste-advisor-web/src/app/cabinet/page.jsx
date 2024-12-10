import './cabinet-page.scss';
import { UserInfo } from '@/app/cabinet/components/user-info';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import React from 'react';

export default function CabinetPage() {
  const breadcrumbsOptions = [
    { label: 'TasteAdvisor', href: '/' },
    { label: 'Cabinet', href: '/cabinet' },
  ];
  return (
    <div className="cabinetPage">
      <Breadcrumbs items={breadcrumbsOptions} />
      <UserInfo />
    </div>
  );
}
