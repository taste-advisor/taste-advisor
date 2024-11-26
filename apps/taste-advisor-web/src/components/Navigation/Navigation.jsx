import './Navigation.scss';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <div className="navigation">
      <Link href="/" className="navigationLink">
        <div>
          <p>HOME</p>
        </div>
      </Link>
      <Link href="/recipes" className="navigationLink">
        <div>
          <p>RECIPES</p>
        </div>
      </Link>
      <Link href="/about_us" className="navigationLink">
        <div>
          <p>ABOUT US</p>
        </div>
      </Link>
    </div>
  );
};
