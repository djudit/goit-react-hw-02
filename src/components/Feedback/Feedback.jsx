import css from './Feedback.module.css';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { BsEmojiNeutralFill } from 'react-icons/bs';
import { BsFillEmojiDizzyFill } from 'react-icons/bs';

export const Feedback = ({ count, total, isPositive }) => {
  return (
    <ul className={css.feedback}>
      <li>
        <BsEmojiSmileFill className={css.icon} size="30" /> {count.good}
      </li>
      <li>
        <BsEmojiNeutralFill className={css.icon} size="30" /> {count.neutral}
      </li>
      <li>
        <BsFillEmojiDizzyFill className={css.icon} size="30" /> {count.bad}
      </li>
      <li>Total: {total}</li>
      <li>Positive: {isPositive}</li>
    </ul>
  );
};
