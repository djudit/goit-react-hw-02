import css from './Description.module.css';
import { FaCoffee } from 'react-icons/fa';

export const Description = () => {
  return (
    <div className={css.description}>
      <h1>Sip Happens Café</h1>
      <FaCoffee className={css.icon} size="40" />
      <p className={css.txt}>
        Please leave your feedback about our service by selecting one of the options below
      </p>
    </div>
  );
};
