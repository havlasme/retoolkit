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
      <div className="space-y-2">
        {String(void_if(isVoid, value))}
      </div>
    </div>
  )
}

export default VoidableTestBed
