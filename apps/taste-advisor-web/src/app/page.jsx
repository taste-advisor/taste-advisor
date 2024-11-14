'use client';

import { getMe, login } from '@/api/auth';

export default function Home() {
  const handleAuth = async () => {
    const res = await getMe();
    console.log(res);
  };

  return (
    <div>
      <h1>GET ME</h1>
      <button onClick={handleAuth}>AUTH</button>
    </div>
  );
}
