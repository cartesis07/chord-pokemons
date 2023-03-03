const data = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1],
  [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],
  [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1],
  [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],
  [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1],
  [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],
  [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5],
  [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],
  [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1],
  [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1],
  [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1],
  [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5],
  [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],
  [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5],
  [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2],
  [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1],
];

const score_data = [
  {
    FIELD1: "Normal",
    "Attack Score": 7,
    "Defense Score": 18,
    "Overall Score": 25,
  },
  {
    FIELD1: "Fire",
    "Attack Score": 10,
    "Defense Score": 15,
    "Overall Score": 25,
  },
  {
    FIELD1: "Water",
    "Attack Score": 12,
    "Defense Score": 16,
    "Overall Score": 28,
  },
  {
    FIELD1: "Electric",
    "Attack Score": 6,
    "Defense Score": 18,
    "Overall Score": 24,
  },
  {
    FIELD1: "Grass",
    "Attack Score": 0,
    "Defense Score": 7,
    "Overall Score": 7,
  },
  {
    FIELD1: "Ice",
    "Attack Score": 10,
    "Defense Score": 7,
    "Overall Score": 17,
  },
  {
    FIELD1: "Fighting",
    "Attack Score": 3,
    "Defense Score": 12,
    "Overall Score": 15,
  },
  {
    FIELD1: "Poison",
    "Attack Score": 3,
    "Defense Score": 17,
    "Overall Score": 20,
  },
  {
    FIELD1: "Ground",
    "Attack Score": 12,
    "Defense Score": 14,
    "Overall Score": 26,
  },
  {
    FIELD1: "Flying",
    "Attack Score": 12,
    "Defense Score": 15,
    "Overall Score": 27,
  },
  {
    FIELD1: "Psychic",
    "Attack Score": 9,
    "Defense Score": 11,
    "Overall Score": 20,
  },
  {
    FIELD1: "Bug",
    "Attack Score": 0,
    "Defense Score": 12,
    "Overall Score": 12,
  },
  {
    FIELD1: "Rock",
    "Attack Score": 13,
    "Defense Score": 7,
    "Overall Score": 20,
  },
  {
    FIELD1: "Ghost",
    "Attack Score": 12,
    "Defense Score": 20,
    "Overall Score": 32,
  },
  {
    FIELD1: "Dragon",
    "Attack Score": 11,
    "Defense Score": 13,
    "Overall Score": 24,
  },
  {
    FIELD1: "Dark",
    "Attack Score": 11,
    "Defense Score": 14,
    "Overall Score": 25,
  },
  {
    FIELD1: "Steel",
    "Attack Score": 9,
    "Defense Score": 22,
    "Overall Score": 31,
  },
  {
    FIELD1: "Fairy",
    "Attack Score": 12,
    "Defense Score": 18,
    "Overall Score": 30,
  },
];

const stats_data = [
  {
    FIELD1: "Super Effective Against",
    Normal: 0,
    Fire: 4,
    Water: 3,
    Electric: 2,
    Grass: 3,
    Ice: 4,
    Fighting: 5,
    Poison: 2,
    Ground: 5,
    Flying: 3,
    Psychic: 2,
    Bug: 3,
    Rock: 4,
    Ghost: 2,
    Dragon: 1,
    Dark: 2,
    Steel: 3,
    Fairy: 3,
  },
  {
    FIELD1: "Strong Defense Against",
    Normal: 0,
    Fire: 6,
    Water: 4,
    Electric: 3,
    Grass: 4,
    Ice: 1,
    Fighting: 3,
    Poison: 5,
    Ground: 2,
    Flying: 3,
    Psychic: 2,
    Bug: 3,
    Rock: 4,
    Ghost: 2,
    Dragon: 4,
    Dark: 2,
    Steel: 10,
    Fairy: 3,
  },
  {
    FIELD1: "Immune To",
    Normal: 1,
    Fire: 0,
    Water: 0,
    Electric: 0,
    Grass: 0,
    Ice: 0,
    Fighting: 0,
    Poison: 0,
    Ground: 1,
    Flying: 1,
    Psychic: 0,
    Bug: 0,
    Rock: 0,
    Ghost: 2,
    Dragon: 0,
    Dark: 1,
    Steel: 1,
    Fairy: 1,
  },
  {
    FIELD1: "No effect Against",
    Normal: 1,
    Fire: 0,
    Water: 0,
    Electric: 1,
    Grass: 0,
    Ice: 0,
    Fighting: 1,
    Poison: 1,
    Ground: 1,
    Flying: 0,
    Psychic: 1,
    Bug: 0,
    Rock: 0,
    Ghost: 1,
    Dragon: 1,
    Dark: 0,
    Steel: 0,
    Fairy: 0,
  },
  {
    FIELD1: "Not very Effective Against",
    Normal: 2,
    Fire: 4,
    Water: 3,
    Electric: 3,
    Grass: 7,
    Ice: 4,
    Fighting: 5,
    Poison: 4,
    Ground: 2,
    Flying: 3,
    Psychic: 2,
    Bug: 7,
    Rock: 3,
    Ghost: 1,
    Dragon: 1,
    Dark: 3,
    Steel: 4,
    Fairy: 3,
  },
  {
    FIELD1: "Weak Defence Against",
    Normal: 1,
    Fire: 3,
    Water: 2,
    Electric: 1,
    Grass: 5,
    Ice: 4,
    Fighting: 3,
    Poison: 2,
    Ground: 3,
    Flying: 3,
    Psychic: 3,
    Bug: 3,
    Rock: 5,
    Ghost: 2,
    Dragon: 3,
    Dark: 3,
    Steel: 3,
    Fairy: 2,
  },
  {
    FIELD1: "Normal Offense",
    Normal: 15,
    Fire: 10,
    Water: 12,
    Electric: 12,
    Grass: 8,
    Ice: 10,
    Fighting: 7,
    Poison: 11,
    Ground: 10,
    Flying: 12,
    Psychic: 13,
    Bug: 8,
    Rock: 11,
    Ghost: 14,
    Dragon: 15,
    Dark: 13,
    Steel: 11,
    Fairy: 12,
  },
  {
    FIELD1: "Normal Defense",
    Normal: 16,
    Fire: 9,
    Water: 12,
    Electric: 14,
    Grass: 9,
    Ice: 13,
    Fighting: 12,
    Poison: 11,
    Ground: 12,
    Flying: 11,
    Psychic: 13,
    Bug: 12,
    Rock: 9,
    Ghost: 12,
    Dragon: 11,
    Dark: 12,
    Steel: 4,
    Fairy: 12,
  },
];

const keys = [
  "Normal",
  "Fire",
  "Water",
  "Electric",
  "Grass",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy",
];

const colors = [
  "#9e9e9e",
  "#e92d2f",
  "#2d95fb",
  "#fcdc06",
  "#409d29",
  "#a9ebfc",
  "#fbb759",
  "#9846cf",
  "#8c4e22",
  "#a2d0f2",
  "#ef5492",
  "#dfe5b2",
  "#bfb699",
  "#bc86bc",
  "#5665df",
  "#907575",
  "#83bccc",
  "#f4a9f4",
];

export { data, keys, colors, score_data, stats_data };
