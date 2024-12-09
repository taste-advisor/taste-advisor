import './page-module.scss';
import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { getRecipeById } from '@/api/recipe';
import SingleRecipePage from '@/components/SingleRecipePage/SingleRecipePage';

const RecipePage = async ({ params }) => {
  const recipeId = (await params).recipeId;
  const data = await getRecipeById(recipeId);
  const breadcrumbsOptions = [
    { label: 'TasteAdvisor', href: '/' },
    { label: 'Recipes', href: '/recipes' },
    { label: `${data.name}`, href: `/recipes/${recipeId}` },
  ];
  return (
    <div className="recipePage">
      <Breadcrumbs items={breadcrumbsOptions} />
      <SingleRecipePage data={data} />
    </div>
  );
};

export default RecipePage;
