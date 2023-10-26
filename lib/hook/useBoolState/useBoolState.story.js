import {hookTestBed} from '../../../.storybook/component'
import UseBoolStateTestBed from './useBoolState.testbed'
import UseBoolStateTestBedJSX from './useBoolState.testbed?raw'

/**
 * The `useBoolState` is a custom React Hook that provides a boolean state variable and a function to update it. The
 * hook takes an **initialState** boolean value (or a function that returns a boolean) as an argument and **returns**
 * a tuple with the current value and a function to update it. The update function accepts an optional boolean value
 * (or a function that returns a boolean) to update the state. Calling the update function without an argument (or
 * with non-boolean argument) will toggle the state.
 *
 * ```jsx
 * const [state, setState] = useBoolState(initialState)
 * ```
 *
 * ```jsdoc
 * @param {boolean|function} initialState  the initial state.
 * @return {[boolean, function]}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const [state, setState] = useBoolState(true)
 *   const closeCallback = useCallback(
 *     function () {
 *       setState(false)
 *     }, [setState])
 *
 *   return (
 *     <div>
 *       <button type="button" onClick={setState}>
 *         Collapse / Expand on heading click event
 *       </button>
 *       {open ? (
 *         <div>
 *           Collapsed content...
 *           <button onClick={closeCallback}>
 *             Close
 *           </button>
 *         </div>
 *       ) : null}
 *     </div>
 *   )
 * }
 * ```
 */
export default {
  title: 'Hook/useBoolState',
  component: UseBoolStateTestBed,
  decorators: [hookTestBed],
  argTypes: {
    initialState: {
      name: 'initialState',
      type: {name: 'boolean'},
      description: 'the initial state.',
    },
  },
  parameters: {
    docs: {source: {code: UseBoolStateTestBedJSX}},
  },
  tags: ['autodocs'],
}

/**
 * ## The TestBed
 */
export const HookTestBed = {
  args: {
    initialState: true,
  },
}
