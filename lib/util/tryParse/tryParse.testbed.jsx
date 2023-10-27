import tryParse from './tryParse'

/**
 * The `tryParse` utility test bed.
 *
 * @param {any} jsonString  the JSON string to parse.
 * @return {JSX.Element}
 * @component
 * @private
 */
const TryParseTestBed = function ({jsonString}) {
  const parsedValue = tryParse(jsonString)

  console.log('tryParse: ', parsedValue)

  return (
    <div className="space-y-4">
      <em>
        NOTE: Try changing the value of the `jsonString` prop below to see the result.
      </em>
      <div>
        current value:{' '}
        <strong>
          {typeof parsedValue}: {String(parsedValue)}
        </strong>
        <br/>
        <small>
          @see console.log
        </small>
      </div>
    </div>
  )
}

export default TryParseTestBed
