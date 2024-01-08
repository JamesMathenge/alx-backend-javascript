export default function updateUniqueItems(map) {
    if (map instanceof Map) {
      for (const [key, value] of map) {
        if (value === 1) {
          updatedMap.set(key, 100);
        }
      }
      return map;
    }
    throw new Error('Cannot process');
  }