import TryParseTestBed from './tryParse.testbed'
import TryParseTestBedJSX from './tryParse.testbed?raw'

/**
 * The `tryParse` is a utility function that takes a **jsonString** as an argument, and attempts to parse it using the
 * `JSON.parse` method. If parsing is successful, the function **returns** the parsed value, which is expected to be
 * an object, otherwise it **returns** the original value.
 *
 * ```jsx
 * const parsedValue = tryParse(jsonString)
 * ```
 *
 * ```jsdoc
 * @param {any} jsonString  the JSON string.
 * @return {any}
 * ```
 *
 * ```jsx
 * const jsonString = '{"test":"value"}'
 * const parsedValue = tryParse(jsonString)
 * console.log(parsedValue)
 * ```
 */
export default {
  title: 'Util/tryParse',
  component: TryParseTestBed,
  argTypes: {
    jsonString: {
      name: 'jsonString',
      type: {name: 'string'},
      description: 'the JSON string.',
    },
  },
  parameters: {
    docs: {source: {code: TryParseTestBedJSX}},
  },
  tags: ['autodocs'],
}

/**
 * ## The TestBed
 */
export const UtilTestBed = {
  args: {
    jsonString: '{"test":"value"}',
  },
}
