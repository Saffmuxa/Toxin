const words = (value, words) => {
  if (value === 0) {
    return "";
  }
  const num = value;
  if (num == 1) return `${value} ${words[0]}`;
  if (num > 1 && num < 5) return `${value} ${words[1]}`;
  if (num % 100 > 20 && num % 10 == 1) return `${value} ${words[0]}`;
  // if (num >= 20) return `${value} ${words[2]}`;
  return `${value} ${words[2]}`;
};
export { words };
