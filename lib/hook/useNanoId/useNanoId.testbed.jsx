import useNanoId from './useNanoId'

/**
 * The useNanoId hook test bed.
 *
 * @param {string} id  the custom id.
 * @return {JSX.Element}
 * @component
 * @private
 */
const UseNanoIdTestBed = function ({id}) {
  const nanoId = useNanoId(id)

  return (
    <div className="space-y-4">
      <em>
        NOTE: Try setting the `id` prop below to see the difference.
      </em>
      <div>
        nanoid value:{' '}
        <strong>
          {nanoId}
        </strong>
      </div>
    </div>
  )
}

export default UseNanoIdTestBed
