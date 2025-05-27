import { notFound } from "next/navigation";
import { vehicles } from "@/data/vehicles";

export default function VehiclePage({ params }: { params: { slug: string } }) {
  const vehicle = vehicles.find((v) => v.id === params.slug);

  if (!vehicle) return notFound();

  return (
    <main>
      <img src={vehicle.imageUrl} alt={vehicle.name} style={{ width: '30vw' }} />
      <h1>{vehicle.name}</h1>
      <p>{vehicle.faction}</p>
      <p><strong>Role:</strong> {vehicle.role}</p>#

      <p>
        Below you'll find everything you need to know: armor values, performance quirks, grinding worthiness, and tactics to dominate—or at least survive.
      </p>

      <p>{vehicle.description}</p>
      <h2>Pros</h2>
      <ul>
        {vehicle.pros.map((pro, index) => (
          <li key={index}>{pro}</li>
        ))}
      </ul>
      <h2>Cons</h2>
      <ul>
        {vehicle.cons.map((con, index) => (
          <li key={index}>{con}</li>
        ))}
      </ul>
      <h2>Worth grinding?</h2>
      <p>{vehicle.worthGrinding ? "Yes" : "No"}</p>
      <h2>Armor</h2>
      <p>Front: {vehicle.armor.front} mm</p>
      <p>Side: {vehicle.armor.side} mm</p>
      <p>Rear: {vehicle.armor.rear} mm</p>
      <h2>Speed</h2>
      <p>{vehicle.speed} km/h</p>
      <h2>Rank:</h2>
      <p>{vehicle.rank}</p>
      <h2>Cost</h2>
      <p>{vehicle.cost} Silver Orders</p>
      <h2>Research Points</h2>
      <p>{vehicle.researchPoints} RP</p>
      <h2>Battle Tactics</h2>
      <ul>
        {vehicle.battleTactics.map((tactic, index) => (
          <li key={index}>{tactic}</li>
        ))}
      </ul>
    </main>
  );
}