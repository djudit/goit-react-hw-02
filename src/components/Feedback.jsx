export const Feedback = ({ count, total, isPositive }) => {
  return (
    <ul>
      <li>Good: {count.good}</li>
      <li>Neutral: {count.neutral}</li>
      <li>Bad: {count.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {isPositive}</li>
    </ul>
  );
};
