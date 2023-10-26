import VoidIfTestBed from './void_if.testbed'
import VoidIfTestBedJSX from './void_if.testbed?raw'

/**
 * The `void_if` is a utility function that **returns** the `void 0` if the **isVoid** argument is true, otherwise
 * **returns** the original **value**.
 *
 * ```jsx
 * const voidable = void_if(isVoid, value)
 * ```
 *
 * ```jsdoc
 * @param {boolean} isVoid  should return `void 0`.
 * @param {any} value  the value to return if `isVoid` is `false`.
 * @return {any}
 * ```
 *
 * ```jsx
 * const Component = function ({disabled}) {
 *   const clickCallback = useCallback(
 *     function () {
 *       console.log('click event')
 *     }, [])
 *
 *   return (
 *     <button type="button" onClick={void_if(disabled, clickCallback)}>
 *       ...
 *     </button>
 *   )
 * }
 * ```
 */
export default {
  title: 'Util/void_if',
  component: VoidIfTestBed,
  argTypes: {
    isVoid: {
      name: 'isVoid',
      type: {name: 'boolean'},
      description: 'should return `void 0`.',
    },
    value: {
      name: 'value',
      type: {name: 'string'},
      description: 'the value.',
    },
  },
  parameters: {
    docs: {source: {code: VoidIfTestBedJSX}},
  },
  tags: ['autodocs'],
}

/**
 * ## The TestBed
 */
export const UtilTestBed = {
  args: {
    isVoid: false,
    value: 'test value',
  },
}
