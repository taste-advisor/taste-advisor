'use client';

import { AccountInfo } from '@/app/cabinet/components/account-info/account-info';
import { AllTabs } from '@/app/cabinet/components/all-tabs/all-tabs';
import { useUserStore } from '@/hooks/userStore';
import { useEffect } from 'react';
import { getMe } from '@/api/auth';

export const UserInfo = () => {
  const { user } = useUserStore();

  useEffect(() => {
    getMe();
  }, []);

  if (!user) {
    return <p>Завантаження...</p>;
  }
  return (
    <>
      <h1 className="cabinetText">My account</h1>
      <AccountInfo user={user} />
      <AllTabs />
    </>
  );
};
