import Link from 'next/link';
import { RECIPE_CATEGORIES } from '@/constants';
import { CategoriesCard } from '@/components/HomePage/categories-card/categories-card';
import './categories-list.scss';

const CreateCard = info => {
  return <CategoriesCard key={info.id} name={info.name} />;
};

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
        {Object.values(RECIPE_CATEGORIES).slice(0, 7).map(CreateCard)}
      </div>
    </div>
  );
};
