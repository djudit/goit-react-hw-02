import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';
import './App.css';

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = window.localStorage.getItem('saved-count');
    if (savedCount !== null) {
      return JSON.parse(savedCount);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const handleGood = () => {
    setCount({
      ...count,
      good: count.good + 1,
    });
  };

  const handleNeutral = () => {
    setCount({
      ...count,
      neutral: count.neutral + 1,
    });
  };

  const handleBad = () => {
    setCount({
      ...count,
      bad: count.bad + 1,
    });
  };

  const totalFeedback = count.good + count.neutral + count.bad;
  const hidden = totalFeedback === 0;
  const positive = Math.round(((count.good + count.neutral) / totalFeedback) * 100);

  const handleReset = () => {
    setCount({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-count', JSON.stringify(count));
  }, [count]);

  return (
    <>
      <Description />

      <Options
        onGood={handleGood}
        onNeutral={handleNeutral}
        onBad={handleBad}
        onReset={handleReset}
        isHidden={hidden}
      />

      {hidden ? (
        <Notification />
      ) : (
        <Feedback count={count} total={totalFeedback} isPositive={positive} />
      )}
    </>
  );
}

export default App;
