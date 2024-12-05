function coinChangeBrute(coins: number[], amount: number): number {
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  let min = Infinity;
  for (const coin of coins) {
    const result = coinChangeBrute(coins, amount - coin);
    if (result >= 0) {
      min = Math.min(min, result + 1);
    }
  }

  return min === Infinity ? -1 : min;
}

function coinChange(coins: number[], amount: number): number {
  const results = new Map<number, number>();

  function doCoinChange(
    coins: number[],
    amount: number,
    results: Map<number, number>,
  ) {
    if (amount < 0) return -1;
    if (amount === 0) return 0;
    if (results.has(amount)) return results.get(amount)!;

    let min = -1;
    for (const c of coins) {
      const target = amount - c;
      const change = doCoinChange(coins, target, results);
      if (change >= 0) {
        if (min < 0) {
          min = change + 1;
        } else {
          min = Math.min(min, change + 1);
        }
      }
    }

    results.set(amount, min);
    return min;
  }

  return doCoinChange(coins, amount, results);
}
