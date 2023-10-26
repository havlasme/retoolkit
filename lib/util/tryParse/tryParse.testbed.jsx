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
      <div className="space-y-2">
        {typeof parsedValue}: {String(parsedValue)}<br/>
        <small>@see console.log</small>
      </div>
    </div>
  )
}

export default TryParseTestBed
