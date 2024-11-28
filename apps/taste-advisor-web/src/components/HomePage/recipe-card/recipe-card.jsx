import './recipe-card.scss';
import Link from 'next/link';

export const RecipeCard = ({ recipeId, image, title, category, calories }) => {
  return (
    <Link href={`/${recipeId}`} className="recipeCard">
      <img src={image} alt="recipe image" className="recipeCardImage" />
      <h3 className="recipeCardTitle">{title}</h3>
      <div className="cardInfo">
        <img src="/images/icons/category.svg" className="recipeCardIcons" />
        <p className="recipeCardText">{category}</p>
        <img src="/images/icons/calories.svg" className="recipeCardIcons" />
        <p className="recipeCardText">{calories} calories</p>
      </div>
    </Link>
  );
};
