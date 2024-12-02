import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <img className="logo" src="/images/logo.png" alt="logo images" />
    </Link>
  );
};
