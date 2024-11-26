import './recipe-card.scss';
import Link from 'next/link';

export const RecipeCard = props => {
  return (
    <Link href="/recipe-card" className="recipeCard">
      <img src={props.image} alt="recipe image" className="recipeCardImage" />
      <h3 className="recipeCardTitle">{props.title}</h3>
      <div className="cardInfo">
        <img src="/images/icons/category.svg" className="recipeCardIcons" />
        <p className="recipeCardText">{props.category}</p>
        <img src="/images/icons/calories.svg" className="recipeCardIcons" />
        <p className="recipeCardText">{props.calories} calories</p>
      </div>
    </Link>
  );
};
