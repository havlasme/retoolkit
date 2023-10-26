import {useCallback, useState} from 'react'
import lastEventCallback from '../../util/lastEventCallback'
import useLatest from './useLatest'

/**
 * The useLatest hook test bed.
 *
 * @return {JSX.Element}
 * @component
 * @private
 */
const UseLatestTestBed = function () {
  const [state, setState] = useState('example')
  const stateLatest = useLatest(state)
  const [waiting, setWaiting] = useState(false)
  const [snapshot, setSnapshot] = useState(null)

  const inputCallback = useCallback(
    function (event) {
      setState(event.target.value)
    }, [setState])
  const submitCallback = useCallback(
    function (event) {
      lastEventCallback(event, {preventDefault: true})
      setWaiting(true)
      setTimeout(function () {
        setSnapshot(stateLatest.current)
        setWaiting(false)
      }, 5000)
    }, [stateLatest])

  return (
    <form onSubmit={submitCallback} className="space-y-4">
      <div className="space-y-2">
        <input type="text" name="text" value={state} onChange={inputCallback} className="block py-1 px-2 border"/>
        <button disabled={waiting} type="submit" className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          {waiting ? 'Waiting...' : 'Submit'}
        </button>
      </div>
      <div className="space-y-2">
        <code>
          {JSON.stringify(snapshot)}
        </code>
      </div>
    </form>
  )
}

export default UseLatestTestBed
