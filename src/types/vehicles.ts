export interface Vehicle {
  id: string;
  name: string;
  faction: string;
  role: string;
  imageUrl: string;
  description: string;
  armor: {
    front: number;
    side: number;
    rear: number;
  };
  speed: number;
  rank: number;
  cost: number;
  researchPoints: number;
  battleTactics: string[];
  worthGrinding: boolean;
  pros: string[];
  cons: string[];
}