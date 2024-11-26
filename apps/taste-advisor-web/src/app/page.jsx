import './home-page.scss';
import { MainCover } from '@/components/HomePage/main-cover/main-cover';
import { CategoriesList } from '@/components/HomePage/categories-list/categories-list';
import { RecipesList } from '@/components/HomePage/recipes-list/recipes-list';
import { AboutProjectCover } from '@/components/HomePage/about-project-cover/about-project-cover';
import { AboutUsCover } from '@/components/HomePage/about-us-cover/about-us-cover';

export default function Home() {
  return (
    <div className="homePage">
      <MainCover />
      <CategoriesList />
      <RecipesList />
      <AboutProjectCover />
      <AboutUsCover />
    </div>
  );
}
