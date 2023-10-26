const DEFAULT_OPTIONS = {
  blurActiveElement: false,
  preventDefault: false,
}

/**
 * Stop the event propagation in DOM. Optionally, prevent the default action
 * execution, or blur an active element.
 *
 * @param {Event} event  the event object.
 * @param {Object|null} [options]  the options object.
 * @param {boolean} [options.blurActiveElement=false]  blur an active element.
 * @param {boolean} [options.preventDefault=false]  prevent the default action.
 */
const lastEventCallback = function (event, options = DEFAULT_OPTIONS) {
  const {blurActiveElement, preventDefault} = Object.assign({},
    DEFAULT_OPTIONS, options)

  event.stopPropagation()
  if (preventDefault) {
    event.preventDefault()
  }
  if (blurActiveElement) {
    document.activeElement?.blur()
  }
}

export default lastEventCallback
