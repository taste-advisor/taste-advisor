import Link from 'next/link';
import './main-cover.scss';

export const MainCover = () => {
  return (
    <div className="mainCover">
      <div className="mainCoverInfo">
        <h1>Discover New Flavors</h1>
        <p>
          Embark on a culinary journey with us. Explore diverse recipes, tips,
          and inspiration to bring out the chef in you. Let's make cooking
          exciting!
        </p>
        <Link href="/recipes" className="recipesLink">
          <p className="recipesLinkText">Explore Recipes</p>
        </Link>
      </div>
    </div>
  );
};
