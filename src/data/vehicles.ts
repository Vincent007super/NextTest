import { Vehicle } from "../types/vehicles";

export const vehicles: Vehicle[] = [
  {
    id: "t34_85",
    name: "T-34-85",
    faction: "Soviet Union",
    role: "Medium Tank",
    imageUrl: "/vehicles/t34_85.png",
    description: "An upgrade to the famous T-34, armed with a powerful 85mm gun. A terror on the battlefield capable of matching most German tanks.",
    armor: {
      front: 75,
      side: 45,
      rear: 45
    },
    speed: 55,
    rank: 3,
    cost: 150000,
    researchPoints: 100000,
    battleTactics: [
      "Use speed and agility to flank enemy tanks.",
      "Engage from medium ranges to maximize firepower advantage.",
      "Avoid head-on confrontations with Tiger IIs."
    ],
    worthGrinding: true,
    pros: [
      "Powerful 85mm gun.",
      "Fast and agile for its weight.",
      "Sloped armor gives effective protection."
    ],
    cons: [
      "Slower turret rotation compared to Shermans.",
      "Crew can be vulnerable to internal damage.",
      "Limited gun depression."
    ]
  },
  {
    id: "sherman_m4a2",
    name: "M4A2 Sherman",
    faction: "USA",
    role: "Medium Tank",
    imageUrl: "/vehicles/sherman.png",
    description: "The M4A2 Sherman is a reliable medium tank with balanced armor and firepower. Widely used across all theaters of war.",
    armor: {
      front: 63,
      side: 38,
      rear: 38
    },
    speed: 38, // in km/h
    rank: 2,
    cost: 120000,
    researchPoints: 85000,
    battleTactics: [
      "Use hull-down positions to maximize turret protection.",
      "Flank heavier tanks instead of direct confrontation.",
      "Support infantry assaults with steady fire support."
    ],
    worthGrinding: true,
    pros: [
      "Good mobility for a medium tank.",
      "Fast reload and decent turret traverse.",
      "Flexible in urban and open map battles."
    ],
    cons: [
      "Armor is mediocre against higher-tier vehicles.",
      "Can catch fire easily when penetrated.",
      "Gun struggles against heavy tanks frontally."
    ]
  },
    {
      id: "panzer_iv_h",
      name: "Panzer IV Ausf. H",
      faction: "Germany",
      role: "Medium Tank",
      imageUrl: "/vehicles/pzivj.png",
      description: "An extensively upgraded Panzer IV variant, fitted with additional armor and a longer 75mm gun to face modern threats.",
      armor: {
        front: 80,
        side: 30,
        rear: 20
      },
      speed: 38,
      rank: 3,
      cost: 100000,
      researchPoints: 75000,
      battleTactics: [
        "Use at mid-range; sniping weaker tanks.",
        "Avoid being flanked, side armor is thin.",
        "Always angle your tank slightly to maximize armor effectiveness."
      ],
      worthGrinding: true,
      pros: [
        "Deadly gun against medium and light tanks.",
        "Good frontal armor against lighter opponents.",
        "Effective against early T-34s and Shermans."
      ],
      cons: [
        "Thin side and rear armor.",
        "Relatively slow compared to lighter tanks.",
        "Easily immobilized by artillery."
      ]
    },
    {
      id: "chi_ha_kai",
      name: "Type 97 Chi-Ha Kai",
      faction: "Japan",
      role: "Medium Tank",
      imageUrl: "/vehicles/chiha.png",
      description: "An upgraded version of the Type 97 Chi-Ha featuring a 47mm high-velocity gun. Effective against lighter tanks, but struggles against heavier foes.",
      armor: {
        front: 25,
        side: 20,
        rear: 20
      },
      speed: 38,
      rank: 1,
      cost: 40000,
      researchPoints: 25000,
      battleTactics: [
        "Ambush tactics in urban or jungle terrain.",
        "Flank slower, heavier tanks.",
        "Avoid open-field engagements."
      ],
      worthGrinding: false,
      pros: [
        "Small profile — hard to spot.",
        "Decent gun for its tier.",
        "Good mobility."
      ],
      cons: [
        "Extremely thin armor.",
        "Poor survivability.",
        "Limited effectiveness against mediums and heavies."
      ]
    },
    {
      id: "panzer_iii_j",
      name: "Panzer III Ausf. J",
      faction: "Germany",
      role: "Medium Tank",
      imageUrl: "/vehicles/pziii.png",
      description: "A workhorse of the early war for Germany, the Panzer III J comes with improved armor and the long-barreled 50mm gun.",
      armor: {
        front: 50,
        side: 30,
        rear: 30
      },
      speed: 40,
      rank: 2,
      cost: 60000,
      researchPoints: 40000,
      battleTactics: [
        "Use mobility to outmaneuver slower tanks.",
        "Prioritize light vehicles and early mediums.",
        "Engage at medium ranges to maximize gun effectiveness."
      ],
      worthGrinding: true,
      pros: [
        "Good mobility.",
        "Decent armor for its tier.",
        "Fast turret traverse."
      ],
      cons: [
        "Weak gun against late-war armor.",
        "Limited survivability in up-tiered matches.",
        "Mediocre post-penetration damage."
      ]
    },
    {
      id: "kv1_l11",
      name: "KV-1 (L-11)",
      faction: "Soviet Union",
      role: "Heavy Tank",
      imageUrl: "/vehicles/kv1.png",
      description: "The KV-1 heavy tank features thick armor that early German guns struggle to penetrate. Its L-11 cannon is decent, but not amazing.",
      armor: {
        front: 75,
        side: 70,
        rear: 70
      },
      speed: 35,
      rank: 3,
      cost: 90000,
      researchPoints: 70000,
      battleTactics: [
        "Lead pushes — absorb fire.",
        "Focus on area denial; hold choke points.",
        "Keep moving; stationary targets attract artillery."
      ],
      worthGrinding: true,
      pros: [
        "Almost invulnerable to early-war guns.",
        "Solid protection all around.",
        "Fear factor: enemies panic when they see a KV-1."
      ],
      cons: [
        "Slow turret rotation.",
        "Mediocre gun performance later on.",
        "Terrible reverse speed."
      ]
    },
    {
      id: "ha_go",
      name: "Type 95 Ha-Go",
      faction: "Japan",
      role: "Light Tank",
      imageUrl: "/vehicles/hago.png",
      description: "The Type 95 Ha-Go is a very lightly armored but quick tank designed for infantry support and rapid advances in early-war Pacific battles.",
      armor: {
        front: 12,
        side: 12,
        rear: 10
      },
      speed: 45,
      rank: 3,
      cost: 20000,
      researchPoints: 10000,
      battleTactics: [
        "Scout enemy positions and call artillery.",
        "Use ambush tactics in jungles.",
        "Avoid any frontal engagements; you're basically made of rice paper."
      ],
      worthGrinding: false,
      pros: [
        "Very mobile.",
        "Fast-firing cannon against infantry and soft targets.",
        "Extremely low repair cost."
      ],
      cons: [
        "Absolutely no armor protection.",
        "Vulnerable to machine guns.",
        "Tiny crew; easily knocked out."
      ]
    },
    {
      id: "m5_stuart",
      name: "M5 Stuart",
      faction: "USA",
      role: "Light Tank",
      imageUrl: "/vehicles/stuart.png",
      description: "A quick and nimble American light tank, excellent for flanking and scouting enemy positions. Armed with a 37mm cannon.",
      armor: {
        front: 44,
        side: 25,
        rear: 25
      },
      speed: 58,
      rank: 1,
      cost: 50000,
      researchPoints: 30000,
      battleTactics: [
        "Speed is life: flank heavier tanks.",
        "Capture points quickly.",
        "Harass enemy artillery and supply lines."
      ],
      worthGrinding: true,
      pros: [
        "Very fast and agile.",
        "Great turret rotation speed.",
        "Small and hard to hit when moving."
      ],
      cons: [
        "Weak firepower against mediums and heavies.",
        "Thin armor; vulnerable to anything bigger than a stern look.",
        "High chance of catching fire."
      ]
    }
    
    
    
];
