import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const baseStyle = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';

  if (to === '-1')
    return (
      <Link to={to} className={baseStyle} onClick={() => navigate(-1)}>
        {children}
      </Link>
    );

  return (
    <Link to={to} className={baseStyle}>
      {children}
    </Link>
  );
}

export default LinkButton;
