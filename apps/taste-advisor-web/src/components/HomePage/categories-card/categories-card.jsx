import './categories-card.scss';
import Link from 'next/link';

export const CategoriesCard = ({ image, name }) => {
  return (
    <Link href="/recipe-card" className="categoriesCard">
      <img src={image} />
      <h3 className="categoriesName">{name}</h3>
    </Link>
  );
};
