import './categories-card.scss';
import Link from 'next/link';

export const CategoriesCard = ({ img, name }) => {
  return (
    <Link href="/recipe-card" className="categoriesCard">
      <img src={img} />
      <h3 className="categoriesName">{name}</h3>
    </Link>
  );
};
