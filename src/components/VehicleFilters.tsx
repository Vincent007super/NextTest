"use client";

import { useEffect, useState } from "react";

type VehicleFiltersProps = {
  factions: string[];
  roles: string[];
  onFilterChange: (filters: { faction: string; role: string; worthGrinding: string }) => void;
};

export default function VehicleFilters({ factions, roles, onFilterChange }: VehicleFiltersProps) {
  const [faction, setFaction] = useState("");
  const [role, setRole] = useState("");
  const [worthGrinding, setWorthGrinding] = useState("");

  useEffect(() => {
    onFilterChange({ faction, role, worthGrinding });
  }, [faction, role, worthGrinding]); // Run this every time any filter changes

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
      <select value={faction} onChange={(e) => setFaction(e.target.value)}>
        <option value="">All Factions</option>
        {factions.map((f) => <option key={f} value={f}>{f}</option>)}
      </select>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">All Roles</option>
        {roles.map((r) => <option key={r} value={r}>{r}</option>)}
      </select>

      <select value={worthGrinding} onChange={(e) => setWorthGrinding(e.target.value)}>
        <option value="">All</option>
        <option value="true">Worth Grinding</option>
        <option value="false">Not Worth Grinding</option>
      </select>
    </div>
  );
}
