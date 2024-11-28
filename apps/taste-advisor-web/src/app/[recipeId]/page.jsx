import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { getRecipeById } from '@/api/recipe';

const RecipePage = async ({ params }) => {
  const recipeId = (await params).recipeId;
  const data = await getRecipeById(recipeId);
  const breadcrumbsOptions = [
    { label: 'TasteAdvisor', href: '/' },
    { label: 'Recipes', href: '/recipes' },
    { label: `${data.name}`, href: `/recipes/${recipeId}` },
  ];
  return (
    <div>
      <Breadcrumbs items={breadcrumbsOptions} />
      {data.name}
    </div>
  );
};

export default RecipePage;
