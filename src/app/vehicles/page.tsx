import { vehicles } from "@/data/vehicles";

export default function VehiclesPage() {
  return (
    <>
      <h2>All Vehicles</h2>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", width: '100vw', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        {vehicles.map(vehicle => (
          <div key={vehicle.id} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1rem", backgroundColor: "#f9f9f9", minWidth: '550px'}}>
            <img src={vehicle.imageUrl} alt={vehicle.name} style={{ width: "100%", height: "auto", borderRadius: "5px" }} />
            <h3>{vehicle.name}</h3>
            <p><strong>Faction:</strong> {vehicle.faction}</p>
            <p><strong>Role:</strong> {vehicle.role}</p>
            <a href={`/vehicles/${vehicle.id}`} style={{ marginTop: "0.5rem", display: "inline-block", textDecoration: "underline", color: "blue" }}>
              View Details
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
