// utils/seededPlacement.ts

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface StickerPlacement {
  x: number; // en pixels
  y: number; // en pixels
  rotation: number; // en degrés
  scale: number; // facteur de scale
}

/**
 * Génère un nombre pseudo-aléatoire à partir d'une seed
 */
const seededRandom = (seed: string, index: number = 0): number => {
  let hash = 0;
  const combinedSeed = seed + index.toString();

  for (let i = 0; i < combinedSeed.length; i++) {
    hash = (hash << 5) - hash + combinedSeed.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  // Normalisation entre 0 et 1
  return (Math.sin(hash) + 1) / 2;
};

/**
 * Calcule le placement d'un sticker selon sa position et une seed
 */
export const getStickerPlacement = (
  position: Position,
  seed: string,
  index: number = 0
): StickerPlacement => {
  const rand1 = seededRandom(seed, index * 3);
  const rand2 = seededRandom(seed, index * 3 + 1);
  const rand3 = seededRandom(seed, index * 3 + 2);
  const rand4 = seededRandom(seed, index * 3 + 3);

  // Plages de variation selon la position
  const placements: Record<Position, StickerPlacement> = {
    "top-left": {
      x: -60 + rand1 * 40, // entre -60 et -20
      y: -60 + rand2 * 40, // entre -60 et -20
      rotation: -25 + rand3 * 50, // entre -25 et 25
      scale: 0.8 + rand4 * 0.4, // entre 0.8 et 1.2
    },
    "top-right": {
      x: -60 + rand1 * 40, // entre 20 et 60
      y: -60 + rand2 * 40, // entre -60 et -20
      rotation: -25 + rand3 * 50,
      scale: 0.8 + rand4 * 0.4,
    },
    "bottom-left": {
      x: -60 + rand1 * 40, // entre -60 et -20
      y: 20 + rand2 * 40, // entre 20 et 60
      rotation: -25 + rand3 * 50,
      scale: 0.8 + rand4 * 0.4,
    },
    "bottom-right": {
      x: -60 + rand1 * 40, // entre 20 et 60
      y: 20 + rand2 * 40, // entre 20 et 60
      rotation: -25 + rand3 * 50,
      scale: 0.8 + rand4 * 0.4,
    },
  };

  return placements[position];
};

/**
 * Génère une rotation aléatoire basée sur une seed
 */
export const seededRotation = (seed: string, min = -45, max = 45): number => {
  let hash = 0;

  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0; // int32
  }

  // Normalisation entre 0 et 1
  const normalized = (Math.sin(hash) + 1) / 2;

  return min + normalized * (max - min);
};
