import {hookTestBed} from '../../../.storybook/component'
import UseLatestTestBed from './useLatest.testbed'
import UseLatestTestBedJSX from './useLatest.testbed?raw'

/**
 * The `useLatest` is a custom React Hook that keeps track of the latest value it receives as an argument. The hook
 * takes a **value** as an argument and **returns** a ref object with a `current` property set to the latest value passed to the hook.
 *
 * ```jsx
 * const latestState = useLatest(value)
 * ```
 *
 * ```jsdoc
 * @param {any} value  the value.
 * @return {{current: any}}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function () {
 *   const [state, setState] = useState('')
 *   const latestState = useLatest(state)
 *
 *   const inputCallback = useCallback(
 *     function (event) {
 *       setState(event.target.value)
 *     }, [setState])
 *   const submitCallback = useCallback(
 *     function () {
 *       console.log(latestState.current)
 *     }, [latestState])
 *
 *   return (
 *     <form onSubmit={submitCallback}>
 *       <input value={state} onChange={inputCallback}/>
 *     </form>
 *   )
 * }
 * ```
 */
export default {
  title: 'Hook/useLatest',
  component: UseLatestTestBed,
  decorators: [hookTestBed],
  parameters: {
    docs: {source: {code: UseLatestTestBedJSX}},
  },
  tags: ['autodocs'],
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
