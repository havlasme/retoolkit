import {useCallback, useState} from 'react'

/**
 * The HookTestBed component.
 *
 * @param {JSX.Element} children  the children element.
 * @return {JSX.Element}
 * @component
 */
const HookTestBed = function ({children}) {
  const [state, setState] = useState(1)
  const [key, setKey] = useState(1)
  const [mount, setMount] = useState(true)

  const setStateCallback = useCallback(
    function () {
      setState(state => state + 1)
    }, [setState])
  const remountCallback = useCallback(
    function () {
      setKey(state => state + 1)
    }, [setKey])
  const unMountCallback = useCallback(
    function () {
      setMount(state => !state)
    }, [setMount])

  return (
    <div className="space-y-8">
      {mount ? (
        <div className="py-4" key={key}>
          {children}
        </div>
      ) : null}
      <div className="py-4 space-x-2 border-t border-neutral-200">
        <button onClick={setStateCallback} className="py-2 px-6 text-neutral-600 font-medium border border-neutral-200 rounded-md">
          Re-render hook ({state})
        </button>
        <button onClick={remountCallback} className="py-2 px-6 text-neutral-600 font-medium border border-neutral-200 rounded-md">
          Remount hook ({key})
        </button>
        <button onClick={unMountCallback} className="py-2 px-6 text-neutral-600 font-medium border border-neutral-200 rounded-md">
          {mount ? 'Unmount' : 'Mount'} hook
        </button>
      </div>
    </div>
  )
}

export default HookTestBed
