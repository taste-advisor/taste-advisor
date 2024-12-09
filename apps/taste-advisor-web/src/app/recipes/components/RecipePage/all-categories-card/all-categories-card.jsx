import './all-categories-card.scss';

export const AllCategoriesCard = ({ img, name, id }) => {
  return (
    <a href={`/recipes?category=${id}`} className="allCategoriesCard">
      <img src={img} alt={name} />
      <h3 className="allCategoriesName">{name}</h3>
    </a>
  );
};
