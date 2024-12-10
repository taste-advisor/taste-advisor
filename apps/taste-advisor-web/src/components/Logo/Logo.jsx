import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="logoLink">
      <img className="logo" src="/images/logo.png" alt="logo images" />
    </Link>
  );
};
