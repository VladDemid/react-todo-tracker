export const sortArray = function (arr: number[]) {
  const sortedArr = arr.toSorted((a, b) => a - b);
};

export const isPositive = function (value: number) {
  if (value >= 0) {
    return true;
  }
  return false;
};
