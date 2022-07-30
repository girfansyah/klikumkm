// cyclic rotation
/**
 *
 * @param {array} A
 * @param {int} K
 * @return {array}
 */

function solution(A, K) {
  const N = A.length;
  const result = new Array(N);

  for (let i = 0; i < N; i++) {
    result[(i + K) % N] = A[i];
  }
  return result;
}
