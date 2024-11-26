import './about-project-cover.scss';
import Link from 'next/link';

export const AboutProjectCover = () => {
  return (
    <div className="aboutProjectCover">
      <div className="aboutProjectInfo">
        <h1>About the Project</h1>
        <p className="aboutProjectText">
          Welcome to our recipe platform, a place where food enthusiasts can
          explore, create, and share. Our site offers a wide range of recipes,
          from quick snacks to gourmet meals, with detailed ingredient lists and
          nutritional information (calories, protein, carbs, and fats).
          Registered users can save their favorite recipes, create personalized
          ones, and share their culinary masterpieces with others. Whether
          you’re a seasoned chef or just starting out, our platform is here to
          make cooking accessible and enjoyable for everyone!
        </p>
        <Link href="/register" className="aboutProjectLink">
          <p className="aboutProjectLinkText">Get Started</p>
        </Link>
      </div>
      <div className="aboutProjectImage">
        <img src="/images/aboutProjectImage.png" alt="About UsCover" />
      </div>
    </div>
  );
};
