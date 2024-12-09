import { useState } from 'react';
import './tabs.scss';
import { SavedRecipes } from '@/app/cabinet/components/all-tabs/tabs/saved-tab';
import { LikedRecipes } from '@/app/cabinet/components/all-tabs/tabs/liked-tab';
import { MyMealsRecipes } from '@/app/cabinet/components/all-tabs/tabs/my-meals-tab';

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState('saved');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  return (
    <div className="allTabs">
      <div className="tabs">
        <button
          className={`tabsButton ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => handleTabChange('saved')}
        >
          SAVED
        </button>
        <button
          className={`tabsButton ${activeTab === 'liked' ? 'active' : ''}`}
          onClick={() => handleTabChange('liked')}
        >
          LIKED
        </button>
        <button
          className={`tabsButton ${activeTab === 'favorites' ? 'active' : ''}`}
          onClick={() => handleTabChange('favorites')}
        >
          MY MEALS
        </button>
      </div>
      <div className="content">
        {activeTab === 'saved' && <SavedRecipes />}
        {activeTab === 'liked' && <LikedRecipes />}
        {activeTab === 'favorites' && <MyMealsRecipes />}
      </div>
    </div>
  );
};
