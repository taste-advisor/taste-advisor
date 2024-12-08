'use client';
import React, { useEffect, useState } from 'react';
import { RECIPE_CATEGORIES } from '@/constants';
import ActionButton from '@/components/ActionButton/ActionButton';
import NutritionList from '@/components/SingleRecipePage/components/NutritionList/NutritionList';
import './SingleRecipePage.scss';
import { reactToRecipe, saveRecipe } from '@/api/recipe';
import { useUserStore } from '@/hooks/userStore';
import { getMe } from '@/api/auth';
import { CommentSection } from '@/components/SingleRecipePage/components/CommentSection/CommentSection';

const formatDate = date => {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};
const SingleRecipePage = ({ data }) => {
  const { user } = useUserStore();
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  useEffect(() => {
    if (!user) {
      getMe();
    } else {
      if (user.saved.find(d => d.id === data.id)) {
        setIsSaved(true);
      }
      if (user.liked.find(d => d.id === data.id)) {
        setIsLiked(true);
      }
      if (user.disliked.find(d => d.id === data.id)) {
        setIsDisliked(true);
      }
    }
  }, [user]);

  const nutritionValues = [
    data.calories,
    data.fat,
    data.protein,
    data.carbohydrate,
    data.cholesterol,
  ];
  const nutritionInfo = Boolean(nutritionValues.some(d => d));

  if (!user) {
    return <p>Завантаження...</p>;
  }

  const handleSave = () => {
    saveRecipe(data.id);
    setIsSaved(!isSaved);
  };

  const handleLike = () => {
    reactToRecipe(data.id, 'like');
    setIsLiked(!isLiked);
    setIsDisliked(false);
  };

  const handleDislike = () => {
    reactToRecipe(data.id, 'dislike');
    setIsDisliked(!isDisliked);
    setIsLiked(false);
  };

  return (
    <div className="content">
      <div className="pageHeader">
        <div className="headerLeft">
          <h3 className="headerText">{data.name}</h3>
          <div className="headerContent">
            <div className="userData">
              <img src={data.author.avatarUrl} className="avatar" alt="" />
              <div className="userText">
                <span className="username">{data.author.username}</span>
                <span className="date">{formatDate(new Date(data.date))}</span>
              </div>
            </div>
            <div className="headerInfo">
              <img src={'images/icons/category.svg'} alt="" />
              {data.categories
                .map(
                  c =>
                    Object.values(RECIPE_CATEGORIES).find(r => r.id === c).name,
                )
                .join(', ')}
            </div>
            {data.calories && (
              <div className="headerInfo">
                <img src={'images/icons/calories.svg'} alt="" />
                {data.calories}kcal
              </div>
            )}
          </div>
        </div>
        <div className="buttonRow">
          <ActionButton
            icon="images/icons/save.svg"
            text="Save"
            size={48}
            onClick={handleSave}
            iconStyle={{
              filter: isSaved
                ? 'invert(60%) sepia(100%) hue-rotate(20deg) saturate(400%)'
                : '',
            }}
          />
          <ActionButton
            icon="images/icons/thumbs-up.svg"
            text="Like"
            size={48}
            onClick={handleLike}
            iconStyle={{
              filter: isLiked
                ? 'invert(60%) sepia(100%) hue-rotate(20deg) saturate(400%)'
                : '',
            }}
          />
          <ActionButton
            icon="images/icons/thumbs-down.svg"
            text="Dislike"
            size={48}
            onClick={handleDislike}
            iconStyle={{
              filter: isDisliked
                ? 'invert(60%) sepia(100%) hue-rotate(20deg) saturate(400%)'
                : '',
            }}
          />
        </div>
      </div>
      <div className="mainBlock">
        <img src={data.imageUrl} alt={data.name} />
        {nutritionInfo && <NutritionList data={data} />}
      </div>
      {data.description && (
        <div className="description">
          <p>{data.description}</p>
        </div>
      )}
      <div className="ingredients">
        <h3 className="headerText">Ingredients</h3>
        {data.ingredients.split(', ').map((i, index) => (
          <div className="ingredientItem" key={i + index}>
            <div className="marker" />
            <span className="ingredientText">{i}</span>
          </div>
        ))}
      </div>
      {data.instructions && (
        <div className="instructions">
          <h3 className="headerText">Instructions</h3>
          {data.instructions.split('\\r\\n').map((i, index) => (
            <div className="instructionItem" key={index + index}>
              <div className="marker" />
              <p>
                <span className="number">{index + 1}</span>. {i}
              </p>
            </div>
          ))}
        </div>
      )}
      <div>
        <h3 className="headerText">Comments</h3>
        <CommentSection
          user={user}
          comments={data.comments}
          recipeId={data.id}
        />
      </div>
    </div>
  );
};

export default SingleRecipePage;
