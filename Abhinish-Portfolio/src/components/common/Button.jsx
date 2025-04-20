import { Link } from "react-router-dom";
export function RedirectButton({ redirectTo, ariaLabel, btnClass, children }) {
    return (
      <Link to={redirectTo} aria-label={ariaLabel}>
        <button className={btnClass}>{children}</button>
      </Link>
    );
  }