import './register-link.scss';
import Link from 'next/link';

export const RegisterLink = () => {
  return (
    <div className="registerLinkForm">
      <p> Don`t have an account yet? </p>
      <Link href="/register">
        <div className="registerLink">
          <p>Sing up</p>
        </div>
      </Link>
    </div>
  );
};
