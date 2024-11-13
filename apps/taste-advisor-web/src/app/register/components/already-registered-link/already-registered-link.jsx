import './already-registered-link.scss';
import Link from 'next/link';

export const AlreadyRegisterLink = () => {
  return (
    <div className="alreadyRegistered">
      <p> Already have an account? </p>
      <Link href="/login">
        <div className="alreadyRegisteredLink">
          <p>Log in</p>
        </div>
      </Link>
    </div>
  );
};
