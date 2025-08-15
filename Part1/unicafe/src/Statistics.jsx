import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positivePercentage = (good / total) * 100 || 0;
  if (total === 0) {
        return (
        <>
            <h1>Statistics</h1>
            <p>No feedback given</p>
        </>
    );
  }
  return (
    <>
      <h1>Statistics</h1>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={total} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={`${positivePercentage.toFixed(2)}%`} />
    </>
  );
}

export default Statistics;