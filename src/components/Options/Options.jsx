import css from './Options.module.css';

export const Options = ({ onGood, onNeutral, onBad, onReset, isHidden }) => {
  return (
    <div className={css.options}>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
      {!isHidden && (
        <button className={css.reset} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
