/**
 * Run callback if the `callable` is a function, otherwise just return the
 * original `callable` value.
 *
 * @param {function} callable  a callable to be executed.
 * @param {any} [argument]  arguments to be passed to the callback.
 * @return {any}
 */
const runCallable = function (callable, ...argument) {
  if (callable instanceof Function) {
    return callable(...argument)
  }
  return callable
}

export default runCallable
