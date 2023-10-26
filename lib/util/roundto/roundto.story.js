import RoundToTestBed from './roundto.testbed'
import RoundToTestBedJSX from './roundto.testbed?raw'

/**
 * The `roundto` is a utility function that rounds a number to the nearest multiple of a given value. It takes
 * a multiple to round to and a **value** to round as arguments and **returns** the rounded value.
 *
 * ```jsx
 * const rounded = roundto(to, value)
 * ```
 *
 * ```jsdoc
 * @param {number} to  the multiple to round to.
 * @param {number} value  the value to round.
 * @return {number}
 * ```
 *
 * ```jsx
 * const rounded = roundto(5, 12)
 * console.log(rounded) // should print 10
 * ```
 */
export default {
  title: 'Util/roundto',
  component: RoundToTestBed,
  argTypes: {
    to: {
      name: 'to',
      type: {name: 'number'},
      description: 'the multiple to round to.',
    },
    value: {
      name: 'value',
      type: {name: 'number'},
      description: 'the value to round.',
    },
  },
  parameters: {
    docs: {source: {code: RoundToTestBedJSX}},
  },
  tags: ['autodocs'],
}

/**
 * ## The TestBed
 */
export const UtilTestBed = {
  args: {
    to: 5,
    value: 12,
  },
}
