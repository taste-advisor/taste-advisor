'use client';

import { getMe, login } from '@/api/auth';
import { Header } from '@/components/Header/Header.jsx';
import './home-page.scss';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  const handleAuth = async () => {
    const res = await getMe();
    console.log(res);
  };

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
