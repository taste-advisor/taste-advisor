import React from 'react';
import './NutritionList.scss';

const NutritionList = ({ data }) => {
  return (
    <>
      <div className="nutrition">
        <h4>Nutrition Information</h4>
        {data.calories && (
          <div className="nutritionListItem">
            <span className="name">Calories</span>
            <span className="value">{data.calories}kcal</span>
          </div>
        )}
        {data.fat && (
          <div className="nutritionListItem">
            <span className="name">Total Fat</span>
            <span className="value">{data.fat}g</span>
          </div>
        )}
        {data.protein && (
          <div className="nutritionListItem">
            <span className="name">Protein</span>
            <span className="value">{data.protein}g</span>
          </div>
        )}
        {data.carbohydrate && (
          <div className="nutritionListItem">
            <span className="name">Carbohydrate</span>
            <span className="value">{data.carbohydrate}g</span>
          </div>
        )}
        {data.cholesterol && (
          <div className="nutritionListItem">
            <span className="name">Cholesterol</span>
            <span className="value">{data.cholesterol}mg</span>
          </div>
        )}
      </div>
    </>
  );
};

export default NutritionList;
