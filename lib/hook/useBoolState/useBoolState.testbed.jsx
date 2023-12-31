import {useCallback} from 'react'
import useBoolState from './useBoolState'

/**
 * The useBoolState hook test bed.
 *
 * @param {boolean} initialState  the initial state.
 * @return {JSX.Element}
 * @component
 * @private
 */
const UseBoolStateTestBed = function ({initialState}) {
  const [state, setState] = useBoolState(initialState)

  const setStateToTrueCallback = useCallback(
    function () {
      setState(true)
    }, [setState])
  const setStateToFalseCallback = useCallback(
    function () {
      setState(false)
    }, [setState])

  return (
    <div className="space-y-4">
      <em>
        NOTE: Try clicking the buttons below to change the state.
      </em>
      <div>
        current state:{' '}
        <strong className={state ? 'text-green-500' : 'text-red-500'}>
          {String(state)}
        </strong>
      </div>
      <div className="space-x-2">
        <button type="button" onClick={setState} className="py-2 px-6 text-neutral-600 font-medium border border-neutral-200 rounded-md">
          Toggle
        </button>
        <button type="button" onClick={setStateToTrueCallback} className="py-2 px-6 text-neutral-600 font-medium border border-neutral-200 rounded-md">
          Set to `true`
        </button>
        <button type="button" onClick={setStateToFalseCallback} className="py-2 px-6 text-neutral-600 font-medium border border-neutral-200 rounded-md">
          Set to `false`
        </button>
      </div>
    </div>
  )
}

export default UseBoolStateTestBed
