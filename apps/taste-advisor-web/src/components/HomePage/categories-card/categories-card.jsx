import './categories-card.scss';
import Link from 'next/link';

export const CategoriesCard = ({ img, name, id }) => {
  const href = `/recipes?category=${id}`;

  return (
    <Link href={href} className="categoriesCard">
      <img src={img} />
      <h3 className="categoriesName">{name}</h3>
    </Link>
  );
};
