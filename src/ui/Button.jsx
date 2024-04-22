import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block rounded-full bg-yellow-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-200 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-3',
    small: base + ' py-3 px-3 md:px-5 md:py-2.5 text-sm',
    round: base + ' px-4 py-2.5 text-sm',
    secondary:
      'inline-block rounded-full font-semibold border-2 border-stone-500 uppercase tracking-wide text-stone-600 transition-colors duration-200 hover:bg-stone-400 focus:bg-stone-500 focus:text-stone-900 focus:outline-none focus:ring focus:ring-stone-500 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-2.5',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
