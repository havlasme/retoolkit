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
      <em>
        NOTE: Try changing the value of the `to` and `value` props below to see the result.
      </em>
      <div>
        current value:{' '}
        <strong>
          {String(roundto(to, value))}
        </strong>
      </div>
    </div>
  )
}

export default RoundToTestBed
