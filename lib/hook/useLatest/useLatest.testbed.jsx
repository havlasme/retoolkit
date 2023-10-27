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
      <em>
        NOTE: Try typing in the input below and submit the form. The snapshot will be taken after 5 seconds. You can change the input value while waiting for the snapshot.
      </em>
      <div>
        current snapshot:{' '}
        <strong>
          {JSON.stringify(snapshot)}
        </strong>
      </div>
      <div className="space-x-2">
        <input type="text" name="text" value={state} onChange={inputCallback} className="py-2 px-3 border border-neutral-200"/>
        <button disabled={waiting} type="submit" className="py-2 px-6 text-neutral-600 font-medium border border-neutral-200 rounded-md">
          {waiting ? 'Waiting...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}

export default UseLatestTestBed
