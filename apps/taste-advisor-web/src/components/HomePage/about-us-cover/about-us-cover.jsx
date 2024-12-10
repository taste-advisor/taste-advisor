import Link from 'next/link';
import './about-us-cover.scss';

export const AboutUsCover = () => {
  return (
    <div className="aboutUsCover" id="about_us">
      <div className="aboutUsInfo">
        <h1>About Us</h1>
        <p className="aboutUsText">
          We are a team of passionate students who came together to create
          something unique and useful for food lovers everywhere. This project
          is part of our academic journey, where we get hands-on experience in
          building a full-fledged web application. From brainstorming ideas to
          designing and coding, we’ve put our hearts into every detail. We hope
          this platform not only helps you discover new recipes but also
          inspires you to try new flavors and create memories in the kitchen.
        </p>
        <Link href="https://github.com/taste-advisor" className="recipesLink">
          <p className="recipesLinkText">Git Hub</p>
        </Link>
      </div>
    </div>
  );
};
