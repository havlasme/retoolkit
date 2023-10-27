import void_if from './void_if'

/**
 * The `void_if` utility test bed.
 *
 * @param {boolean} isVoid  whether to return `void 0`.
 * @param {any} value  the value to return if `isVoid` is `false`.
 * @return {JSX.Element}
 * @component
 * @private
 */
const VoidableTestBed = function ({isVoid, value}) {
  return (
    <div className="space-y-4">
      <em>
        NOTE: Try changing the value of the `isVoid` prop below to see the result.
      </em>
      <div>
        current value:{' '}
        <strong>
          {String(void_if(isVoid, value))}
        </strong>
      </div>
    </div>
  )
}

export default VoidableTestBed
