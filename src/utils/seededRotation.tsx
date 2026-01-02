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
