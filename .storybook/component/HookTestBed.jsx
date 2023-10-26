import {useCallback, useState} from 'react'

/**
 * The HookTestBed component.
 *
 * @param {JSX.Element} children  the children element.
 * @return {JSX.Element}
 * @component
 */
const HookTestBed = function ({children}) {
  const [mount, setMount] = useState(true)
  const [key, setKey] = useState(1)
  const [state, setState] = useState(1)

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
    <div>
      {mount ? (
        <div key={key}>
          {children}
        </div>
      ) : null}
      <div className="mt-4 pt-4 space-x-2 border-t">
        <button onClick={setStateCallback} className="py-1.5 px-6 text-neutral-600 font-medium border rounded-md">
          Re-render hook ({state})
        </button>
        <button onClick={remountCallback} className="py-1.5 px-6 text-neutral-600 font-medium border rounded-md">
          Remount hook ({key})
        </button>
        <button onClick={unMountCallback} className="py-1.5 px-6 text-neutral-600 font-medium border rounded-md">
          {mount ? 'Unmount' : 'Mount'} hook
        </button>
      </div>
    </div>
  )
}

export default HookTestBed
