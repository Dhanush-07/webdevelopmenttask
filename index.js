function solution(D) {
  const result = {
    'Mon': 0,
    'Tue': 0,
    'Wed': 0,
    'Thu': 0,
    'Fri': 0,
    'Sat': 0,
    'Sun': 0
  };

  const sortedKeys = Object.keys(D).sort();

  for (let i = 0; i < sortedKeys.length; i++) {
    const date = new Date(sortedKeys[i]);
    const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
    result[dayOfWeek] += D[sortedKeys[i]];
  }

  const daysOfWeek = Object.keys(result);
  for (let i = 0; i < daysOfWeek.length; i++) {
    const day = daysOfWeek[i];
    if (result[day] === 0) {
      const prevDay = daysOfWeek[i - 1];
      const nextDay = daysOfWeek[i + 1];
      result[day] = Math.round((result[prevDay] + result[nextDay]) / 2);
    }
  }

  return result;
}

const assert = require('assert');


const input1 = {
  '2020-01-01': 4,
  '2020-01-02': 4,
  '2020-01-03': 6,
  '2020-01-04': 8,
  '2020-01-05': 2,
  '2020-01-06': -6,
  '2020-01-07': 2,
  '2020-01-08': -2
};
const expectedOutput1 = {
  'Mon': -6,
  'Tue': 2,
  'Wed': 2,
  'Thu': 4,
  'Fri': 6,
  'Sat': 8,
  'Sun': 2
};
assert.deepStrictEqual(solution(input1), expectedOutput1);


const input2 = {
  '2020-01-01': 6,
  '2020-01-04': 12,
  '2020-01-05': 14,
  '2020-01-06': 2,
  '2020-01-07': 4
};
const expectedOutput2 = {
  'Mon': 2,
  'Tue': 4,
  'Wed': 6,
  'Thu': 8,
  'Fri': 10,
  'Sat': 12,
  'Sun': 14
};
assert.deepStrictEqual(solution(input2), expectedOutput2);

