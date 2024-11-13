'use client';

import { getMe, login } from '@/api/auth';

export default function Home() {


  const handleLoginSubmit = async formData => {
    const loginData = {
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
    };
    await login(loginData);
  };

  const handleAuth = async () => {
    const res = await getMe();
    console.log(res);
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <form action={handleLoginSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" />
        <label htmlFor="password">Password</label>
        <input name="password" />
        <button type="submit"> SUBMIT</button>
      </form>
      <h1>GET ME</h1>
      <button onClick={handleAuth}>AUTH</button>
    </div>
  );
}
