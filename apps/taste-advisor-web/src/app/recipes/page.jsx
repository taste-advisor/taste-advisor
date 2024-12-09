import './recipe-page.scss';
import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { AllRecipeList } from '@/app/recipes/components/RecipePage/all-recipe-list/all-recipe-list.jsx';
import './recipe-page.scss';

export default function FullRecipePage() {
  const breadcrumbsOptions = [
    { label: 'TasteAdvisor', href: '/' },
    { label: 'Recipes', href: '/recipes' },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbsOptions} />
      <div className="recipePage">
        <AllRecipeList />
      </div>
    </div>
  );
}
