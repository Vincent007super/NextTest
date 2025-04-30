"use client";

import { useState } from "react";
import { vehicles } from "@/data/vehicles";
import VehicleFilters from "@/components/VehicleFilters";


export default function VehiclesPage() {
  const [filters, setFilters] = useState({ faction: "", role: "", worthGrinding: "" });

  const uniqueFactions = [...new Set(vehicles.map((v) => v.faction))];
  const uniqueRoles = [...new Set(vehicles.map((v) => v.role))];

  const filteredVehicles = vehicles.filter((v) => {
    const matchesFaction = !filters.faction || v.faction === filters.faction;
    const matchesRole = !filters.role || v.role === filters.role;
    const matchesWorth = filters.worthGrinding === ""
      || (filters.worthGrinding === "true" && v.worthGrinding)
      || (filters.worthGrinding === "false" && v.worthGrinding === false);
    return matchesFaction && matchesRole && matchesWorth;
  });
  return (
    <>
      <h2>All Vehicles</h2>
      <p>
        Browse the full arsenal of Enlisted's armored units. Use the filters below to narrow down what you're looking for—by faction, role, or whether a vehicle is actually worth your precious time (and Silver Orders).
      </p>
      <VehicleFilters
        factions={uniqueFactions}
        roles={uniqueRoles}
        onFilterChange={setFilters}
      />
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", width: '100vw', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        {filteredVehicles.map(vehicle => (
          <a key={vehicle.id} href={`/vehicles/${vehicle.id}`} style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1rem", backgroundColor: "#f9f9f9", minWidth: '550px' }} className="vehicle-card">
            <img src={vehicle.imageUrl} alt={vehicle.name} style={{ width: "100%", height: "auto", borderRadius: "5px" }} />
            <h3>{vehicle.name}</h3>
            <p><strong>Faction:</strong> {vehicle.faction}</p>
            <p><strong>Role:</strong> {vehicle.role}</p>
          </a>
        ))}
      </div>
    </>
  );
}
