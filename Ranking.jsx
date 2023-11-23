// components/Ranking.jsx
import React from 'react';

const Ranking = () => {
 
  const rankings = [
    { name: 'Alice', score: 98 },
    { name: 'Bob', score: 95 },
    { name: 'Charlie', score: 90 },
   
  ];

  return (
    <div>
      <h1>Ranking Page</h1>
      <ul>
        {rankings.map((rank, index) => (
          <li key={index}>{rank.name} - {rank.score} points</li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;