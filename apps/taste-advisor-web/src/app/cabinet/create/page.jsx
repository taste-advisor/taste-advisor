import React from 'react';
import { CreationPage } from '@/components/CreationPage/CreationPage';
import './page-module.scss';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';

const Page = () => {
  const breadcrumbsOptions = [
    { label: 'TasteAdvisor', href: '/' },
    { label: 'Cabinet', href: '/cabinet' },
    { label: 'Create', href: `/cabinet/create` },
  ];

  return (
    <div className="createPage">
      <Breadcrumbs items={breadcrumbsOptions} />
      <CreationPage />
    </div>
  );
};

export default Page;
