export const getArrayForward = (
  count: number,
  activeDate: number,
): number[] => {
  const maxIndex: number = count - 1;
  const array: number[] = [];
  let value: number[];

  for (let i = activeDate; i <= maxIndex; i++) {
    array.push(i);
  }

  for (let i = 0; i < activeDate; i++) {
    array.push(i);
  }

  switch (count) {
    case 2:
      value = array.slice(0);
      break;
    case 3:
      value = array.slice(1);
      break;
    case 4:
      value = array.slice(2);
      break;
    case 5:
      value = array.slice(3);
      break;
    case 6:
      value = array.slice(4);
      break;
    default:
      value = [];
  }

  return value;
};
