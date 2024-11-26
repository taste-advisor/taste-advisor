import './RegisterLink.scss';
import Link from 'next/link';

export const RegisterLink = () => {
  return (
    <Link href="/register" className="registerLink">
      <p className="registerLinkText">Sign up</p>
    </Link>
  );
};
