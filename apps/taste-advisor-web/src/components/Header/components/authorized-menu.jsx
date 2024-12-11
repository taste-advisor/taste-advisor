import { useEffect } from 'react';
import { getMe } from '@/api/auth';
import { useUserStore } from '@/hooks/userStore';
import './authorized-menu.scss';
import Link from 'next/link';

export const AuthorizedMenu = () => {
  const { user } = useUserStore();

  useEffect(() => {
    if (!user) {
      getMe();
    }
  }, [user]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <Link href="/cabinet" className="authorizedMenu">
      <p className="username">{user.username}</p>
      <img src={user.avatarUrl} alt="user avatar" className="userAvatar" />
    </Link>
  );
};
