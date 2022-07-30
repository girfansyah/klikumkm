// iterations binary

function solution(N) {
  return N.toString(2)
    .split('1')
    .slice(1, -1)
    .reduce((a, b) => (a > b.length ? a : b.length), 0);
}
