import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type }) {
  const base =
    " rounded-md bg-yellow-500  font-semibold mx-2 uppercase  tracking-wide text-stone-800  transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-300 focus:outline-none focus:ring-2  focus:ring-yellow-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:bg-stone-500 disabled:text-stone-200  sm:tracking-widest ";
  const styles = {
    primary: base + "  px-3 py-2 sm:px-4 sm:py-3",
    small: base + "px-3 py-2 sm:px-3 sm:py-2 text-xs",
    secondry:
      "rounded-md  font-semibold mx-2 uppercase tracking-wide  transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 text-stone-400 px-4 py-2 border-stone-300 border-2  focus:bg-stone-200 focus:text-stone-800 focus:outline-none focus:ring-2  focus:ring-stone-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:bg-stone-500 disabled:text-stone-200  sm:tracking-widest  ",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
