import './LoginLink.scss';
import Link from 'next/link';

export const LoginLink = () => {
  return (
    <>
      <Link href="/login">
        <div className="loginLink">
          <p>Log in</p>
        </div>
      </Link>
    </>
  );
};
