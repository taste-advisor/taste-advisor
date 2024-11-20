import './Navigation.scss';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <div className="navigation">
      <Link href="/">
        <div>
          <p>HOME</p>
        </div>
      </Link>
      <Link href="/recipes">
        <div>
          <p>RECIPES</p>
        </div>
      </Link>
      <Link href="/about_us">
        <div>
          <p>ABOUT US</p>
        </div>
      </Link>
    </div>
  );
};
