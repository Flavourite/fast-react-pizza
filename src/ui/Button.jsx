import { Link } from 'react-router-dom';

function Button({ onClick, children, disabled, to, type }) {
  const baseStyle =
    'inline-block rounded-full bg-yellow-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ';

  const styles = {
    primary: baseStyle + 'md:py-4 md:px-6 px-4 py-3',
    small: baseStyle + 'p-3 py-2 md:px-5 md:py-2.5 text-sm',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
