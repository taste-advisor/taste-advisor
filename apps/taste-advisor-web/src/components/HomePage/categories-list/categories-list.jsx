import Link from 'next/link';
import { RECIPE_CATEGORIES } from '@/constants';
import { CategoriesCard } from '@/components/HomePage/categories-card/categories-card';
import './categories-list.scss';

export const CategoriesList = () => {
  return (
    <div className="categoriesList">
      <div className="categoriesMenu">
        <h2>Categories</h2>
        <Link href="/categories" className="categoriesLink">
          <p className="categoriesListText">View All Categories</p>
        </Link>
      </div>
      <div className="categoriesCardsList">
        {Object.values(RECIPE_CATEGORIES)
          .slice(0, 6)
          .map(c => (
            <CategoriesCard key={c.name} img={c.img} name={c.name} />
          ))}
      </div>
    </div>
  );
};
