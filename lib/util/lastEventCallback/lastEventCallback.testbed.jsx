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
      <em>
        NOTE: Try changing the `blurActiveElement` and `preventDefault` props below before submitting the form to see the difference.
      </em>
      <div>
        was submitted:{' '}
        <strong>
          {String(submitted)}
        </strong>
      </div>
      <div className="space-x-2">
        <input type="text" className="py-2 px-3 border border-neutral-300"/>
        <button type="submit" className="py-2 px-6 text-neutral-600 font-medium border border-neutral-300 rounded-md">
          Submit
        </button>
        <button type="button" onClick={resetCallback} className="py-2 px-6 text-neutral-600 font-medium border border-neutral-300 rounded-md">
          Reset
        </button>
      </div>
    </form>
  )
}

export default LastEventCallbackTestBed
