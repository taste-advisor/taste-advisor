import "./already-registered-link.scss"
import Link from "next/link";

export const AlreadyRegisterLink = () => {
  return (
    <div className="already-registered">
      <p> Already have an account? </p>
      <Link href="/login">
        <div className="already-registered-link">
         <p>Log in</p>
        </div>
      </Link>
    </div>
  );
};