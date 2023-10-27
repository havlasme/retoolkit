import runCallable from './runCallable'

/**
 * The `runCallable` utility test bed.
 *
 * @return {JSX.Element}
 * @component
 * @private
 */
const RunCallableTestBed = function () {
  return (
    <div className="space-y-4">
      <em>
        NOTE: See examples below executing the `runCallable` utility with different arguments.
      </em>
      <div className="space-y-2">
        <div>
          <code className="block mb-2 text-sm">
            {'runCallable((...argument) => argument.join(\' \'), \'callable\', \'with\', \'arguments\')'}
          </code>
          result:{' '}
          <strong>
            {runCallable((...argument) => argument.join(' '), 'callable', 'with', 'arguments')}
          </strong>
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <code className="block mb-2 text-sm">
            {'runCallable(\'not a callable\')'}
          </code>
          result:{' '}
          <strong>
            {runCallable('not a callable')}
          </strong>
        </div>
      </div>
    </div>
  )
}

export default RunCallableTestBed
