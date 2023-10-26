/**
 * Return `void 0` if `isVoid` is `true`, otherwise return the original value.
 *
 * @param {boolean} isVoid  should return `void 0`.
 * @param {any} value  the value to return if `isVoid` is `false`.
 * @return {any}
 */
const void_if = function (isVoid, value) {
  return isVoid ? void 0 : value
}

export default void_if
