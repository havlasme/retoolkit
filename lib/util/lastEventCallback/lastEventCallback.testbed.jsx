import {useCallback, useState} from 'react'
import lastEventCallback from './lastEventCallback'

/**
 * The `lastEventCallback` utility test bed.
 *
 * @param {boolean} blurActiveElement  blur an active element.
 * @param {boolean} preventDefault  prevent default action execution.
 * @return {JSX.Element}
 * @component
 * @private
 */
const LastEventCallbackTestBed = function ({blurActiveElement, preventDefault}) {
  const [submitted, setSubmitted] = useState(false)

  const submitCallback = useCallback(
    function (event) {
      lastEventCallback(event, {blurActiveElement, preventDefault})
      setSubmitted(true)
    }, [blurActiveElement, preventDefault, setSubmitted])
  const resetCallback = useCallback(
    function () {
      setSubmitted(false)
    }, [setSubmitted])

  return (
    <form onSubmit={submitCallback} className="space-y-4">
      <div>
        Submitted: {String(submitted)}
      </div>
      <div className="space-y-2">
        <label>
          <span className="block mb-1">
            TextField
          </span>
          <input type="text" className="block py-1 px-2 border"/>
        </label>
      </div>
      <div className="space-x-2">
        <button type="submit" className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Submit
        </button>
        <button type="button" onClick={resetCallback} className="py-1 px-4 text-neutral-600 font-medium border rounded-md">
          Reset
        </button>
      </div>
    </form>
  )
}

export default LastEventCallbackTestBed
