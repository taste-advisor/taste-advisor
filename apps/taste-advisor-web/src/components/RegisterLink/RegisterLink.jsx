import './RegisterLink.scss';
import Link from 'next/link';

export const RegisterLink = () => {
  return (
    <>
      <Link href="/register">
        <div className="registerLink">
          <p>Sign up</p>
        </div>
      </Link>
    </>
  );
};
