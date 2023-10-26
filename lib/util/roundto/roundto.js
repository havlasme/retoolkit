/**
 * Round a number to the nearest multiple of a given value.
 *
 * @param {number} to  the multiple to round to.
 * @param {number} value  the value to round.
 * @return {number}
 */
const roundto = function (to, value) {
  return Math.round(value / to) * to
}

export default roundto
