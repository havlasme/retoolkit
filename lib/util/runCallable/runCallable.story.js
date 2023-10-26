import RunCallableTestBed from './runCallable.testbed'
import RunCallableTestBedJSX from './runCallable.testbed?raw'

/**
 * The `runCallable` is a utility function that executes the given callback. It takes a **callable** and an arbitrary
 * number of arguments, and **returns** the result of executing the callback function with given arguments, or simply
 * **returns** the original callable value if it is not of type function.
 *
 * ```jsx
 * runCallable(callable, [...argument])
 * ```
 *
 * ```jsdoc
 * @param {function} callable  a callable to be executed.
 * @param {any} [argument]  arguments to be passed to the callback.
 * @return {any}
 * ```
 *
 * ```jsx
 * const Component = function ({onSubmit}) {
 *   const submitCallback = useCallback(
 *     function (event) {
 *       console.log('do something on submit')
 *       return runCallable(onSubmit, event)
 *     }, [])
 *
 *   return (
 *     <form onSubmit={submitCallback}>
 *       ...
 *     </form>
 *   )
 * }
 * ```
 */
export default {
  title: 'Util/runCallable',
  component: RunCallableTestBed,
  parameters: {
    docs: {source: {code: RunCallableTestBedJSX}},
  },
  tags: ['autodocs'],
}

/**
 * ## The TestBed
 */
export const UtilTestBed = {}
