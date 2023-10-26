import HookTestBed from './HookTestBed'

/**
 * The hookTestBed hook.
 *
 * @param {JSX.Element} TestBed  the hook test bed.
 * @return {JSX.Element}
 */
const hookTestBed = function (TestBed) {
  return (
    <HookTestBed>
      <TestBed/>
    </HookTestBed>
  )
}

export default hookTestBed
