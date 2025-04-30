'use client';
import { vehicles } from '@/data/vehicles';
import { useMemo } from 'react';

function getTankOfTheDay() {
  const today = new Date();
  const seed = Number(`${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`);
  const index = seed % vehicles.length;
  return vehicles[index];
}

export default function HomePage() {
  const featuredTank = getTankOfTheDay();

  return (
    <>
      <h2>Welcome to Vincent's Guide on Enlisted Armored Vehicles</h2>
      <p>
        Whether you love tanks, fear them, or just want to unlock them faster—this guide's got you covered.
      </p>

      <h3>🔥 Featured Tank of the Day</h3>
      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '12px', maxWidth: '500px' }}>
        <h4>{featuredTank.name}</h4>
        <p><em>{featuredTank.faction} — {featuredTank.role}</em></p>
        <img src={featuredTank.imageUrl} alt={featuredTank.name} style={{ width: '100%', borderRadius: '8px' }} />
        <p>{featuredTank.description}</p>
        <a href={`/vehicles/${featuredTank.id}`} style={{ color: '#0070f3', textDecoration: 'underline' }}>
          View Full Stats →
        </a>
      </div>

      <h3>What you'll find here:</h3>
      <ul>
        <li>Side-by-side tank comparisons</li>
        <li>Real in-game performance tips</li>
        <li>Dry humor & mildly unhinged rants about bad turret traverse speeds</li>
      </ul>
    </>
  );
}
