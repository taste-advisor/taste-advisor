import './categories-card.scss';
import Link from 'next/link';

export const CategoriesCard = props => {
  return (
    <Link href="/recipe-card" className="categoriesCard">
      <h3 className="categoriesName">{props.name}</h3>
    </Link>
  );
};
