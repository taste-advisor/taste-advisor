import './all-categories-card.scss';

export const AllCategoriesCard = ({ img, name, id }) => {
  const href = id === 14 ? '/recipes' : `/recipes?category=${id}`;

  return (
    <a href={href} className="allCategoriesCard">
      <img src={img} alt={name} />
      <h3 className="allCategoriesName">{name}</h3>
    </a>
  );
};
