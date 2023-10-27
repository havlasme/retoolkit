import {hookTestBed} from '../../../.storybook/component'
import UseNanoIdTestBed from './useNanoId.testbed'
import UseNanoIdTestBedJSX from './useNanoId.testbed?raw'

/**
 * The `useNanoId` is a custom React Hook that uses the [`nanoid`](https://github.com/ai/nanoid) library to generate a
 * unique id. The hook takes an **id** as an optional argument and **returns** random unique id when optional id is not
 * provided. The randomly generated id is stable within an instance of React component.
 *
 * ```jsx
 * const nanoId = useNanoId(id)
 * ```
 *
 * ```jsdoc
 * @param {string|null} [id=null]  the custom id.
 * @return {string}
 * ```
 *
 * ### Example
 *
 * ```jsx
 * const Component = function ({id, label, ...rest}) {
 *   const nanoId = useNanoId(id)
 *
 *   return (
 *     <div>
 *       <label htmlFor={nanoId}>
 *         {label}
 *       </label>
 *       <input id={nanoId} {...rest}/>
 *     </div>
 *   )
 * }
 * ```
 */
export default {
  title: 'Hook/useNanoId',
  component: UseNanoIdTestBed,
  argTypes: {
    id: {
      name: 'id',
      type: {name: 'string'},
      description: 'the custom id.',
    },
  },
  decorators: [hookTestBed],
  parameters: {
    docs: {source: {code: UseNanoIdTestBedJSX}},
  },
  tags: ['autodocs'],
}

/**
 * ## The TestBed
 */
export const HookTestBed = {}
