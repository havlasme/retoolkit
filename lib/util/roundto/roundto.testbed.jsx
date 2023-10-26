import roundto from './roundto'

/**
 * The `roundto` utility test bed.
 *
 * @param {number} to  the multiple to round to.
 * @param {number} value  the value to round.
 * @return {JSX.Element}
 * @component
 * @private
 */
const RoundToTestBed = function ({to, value}) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {String(roundto(to, value))}
      </div>
    </div>
  )
}

export default RoundToTestBed
