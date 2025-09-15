import { Link } from 'react-router-dom';

function Button({ onClick, children, disabled, to }) {
  const baseStyle =
    'inline-block rounded-full bg-yellow-500 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4 mt-4';

  if (to)
    return (
      <Link to={to} className={baseStyle}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} onClick={onClick} className={baseStyle}>
      {children}
    </button>
  );
}

export default Button;
