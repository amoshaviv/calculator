const getNaturalNumbers = () => {
  const output = [];

  for (let i = 2; i < 100; i++) output.push(i);

  return output;
};

const getPrimes = () => {
  return [
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
  ];
};

export default {
  beams: getPrimes(),
  ringsConfig: [[0,20]],
  beamsConfig: [[0,20]],
};
