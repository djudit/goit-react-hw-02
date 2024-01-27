export const Options = ({ onGood, onNeutral, onBad, onReset, isHidden }) => {
  return (
    <div>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
      {!isHidden && <button onClick={onReset}>Reset</button>}
    </div>
  );
};
