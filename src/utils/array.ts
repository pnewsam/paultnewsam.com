export const firstHalf = (items: any[]) => items.slice(0, items.length / 2);

export const secondHalf = (items: any[]) => items.slice(items.length / 2);

export const groupBy = <T>(items: T[], key: keyof T) => {
  return items.reduce(
    (acc: Record<keyof T, T[]>, item) => {
      const k = item[key] as keyof T;
      acc[k] = [...(acc[k] || []), item];
      return acc;
    },
    {} as Record<keyof T, T[]>,
  );
};

export const keyBy = <T>(items: T[], key: keyof T) => {
  return items.reduce(
    (acc, item) => {
      const k = item[key] as keyof T;
      acc[k] = item;
      return acc;
    },
    {} as Record<keyof T, T>,
  );
};
