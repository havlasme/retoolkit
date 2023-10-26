import LastEventCallbackTestBed from './lastEventCallback.testbed'
import LastEventCallbackTestBedJSX from './lastEventCallback.testbed?raw'

/**
 * The `lastEventCallback` is a utility function that can be used to stop event propagation in DOM. Optionally, it can
 * prevent default action execution, or blur an active element.
 *
 * ```jsx
 * lastEventCallback(event, {blurActiveElement: false, preventDefault: false})
 * ```
 *
 * ```jsdoc
 * @param {Event} event  the event object.
 * @param {Object|null} [options]  the options object.
 * @param {boolean} [options.blurActiveElement=false]  blur an active element.
 * @param {boolean} [options.preventDefault=false]  prevent the default action.
 * ```
 *
 * ```jsx
 * const Component = function () {
 *   const submitCallback = useCallback(
 *     function (event) {
 *       lastEventCallback(event, {preventDefault: true})
 *       console.log('submitted!')
 *     }, [])
 *
 *   return (
 *     <form onSubmit={submitCallback}>
 *       <button type="submit">
 *         Submit
 *       </button>
 *     </form>
 *   )
 * }
 * ```
 */
export default {
  title: 'Util/lastEventCallback',
  component: LastEventCallbackTestBed,
  argTypes: {
    blurActiveElement: {
      name: 'blurActiveElement',
      type: {name: 'boolean'},
      description: 'blur an active element.',
    },
    preventDefault: {
      name: 'preventDefault',
      type: {name: 'boolean'},
      description: 'prevent the default action execution.',
    },
  },
  parameters: {
    docs: {source: {code: LastEventCallbackTestBedJSX}},
  },
  tags: ['autodocs'],
}

/**
 * ## The TestBed
 */
export const UtilTestBed = {
  args: {
    blurActiveElement: true,
    preventDefault: true,
  },
}
