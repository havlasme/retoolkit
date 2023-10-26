import {useCallback, useState} from 'react'
import runCallable from '../../util/runCallable'

/**
 * The `useBoolState` hook.
 *
 * @param {boolean|function} initialState  then initial state.
 * @return {[boolean, function]}
 */
const useBoolState = function (initialState) {
  // the state. must be `boolean` value.
  const [state, setState] = useState(initialState)
  // the state update callback.
  // when the `nextState` is a `boolean`, or a function that returns a
  // `boolean`, then the state will be updated to the `nextState` value.
  // otherwise, the state will be toggled.
  const setBoolState = useCallback(
    function (nextState) {
      setState(function (state) {
        const newState = runCallable(nextState, state)
        if (typeof newState === 'boolean') {
          return newState
        }
        return !state
      })
    }, [setState])

  return [state, setBoolState]
}

export default useBoolState
