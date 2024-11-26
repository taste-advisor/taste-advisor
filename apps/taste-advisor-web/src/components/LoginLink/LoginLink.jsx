import './LoginLink.scss';
import Link from 'next/link';

export const LoginLink = () => {
  return (
    <>
      <Link href="/login" className="loginLink">
        <p className="loginLinkText">Log in</p>
      </Link>
    </>
  );
};
