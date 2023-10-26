import lastEventCallback from './lastEventCallback'

describe('lastEventCallback', () => {
  it('should prevent default action if preventDefault option is true', () => {
    const mockEvent = {stopPropagation: vi.fn(), preventDefault: vi.fn()}
    lastEventCallback(mockEvent, {preventDefault: true})
    expect(mockEvent.stopPropagation).toHaveBeenCalled()
    expect(mockEvent.preventDefault).toHaveBeenCalled()
  })

  it('should blur active element if blurActiveElement option is true', () => {
    const mockEvent = {stopPropagation: vi.fn(), preventDefault: vi.fn()}
    const activeElement = {blur: vi.fn()}
    const getActiveElementMock = vi.spyOn(document, 'activeElement', 'get')
    getActiveElementMock.mockReturnValue(activeElement)
    lastEventCallback(mockEvent, {blurActiveElement: true})
    expect(mockEvent.stopPropagation).toHaveBeenCalled()
    expect(document.activeElement.blur).toHaveBeenCalled()
  })

  it('should not prevent default action or blur active element if no options are provided', () => {
    const mockEvent = {stopPropagation: vi.fn(), preventDefault: vi.fn()}
    const activeElement = {blur: vi.fn()}
    const getActiveElementMock = vi.spyOn(document, 'activeElement', 'get')
    getActiveElementMock.mockReturnValue(activeElement)
    lastEventCallback(mockEvent)
    expect(mockEvent.stopPropagation).toHaveBeenCalled()
    expect(mockEvent.preventDefault).not.toHaveBeenCalled()
    expect(document.activeElement.blur).not.toHaveBeenCalled()
  })

  it('should use default options if options argument is not provided', () => {
    const event = {stopPropagation: vi.fn(), preventDefault: vi.fn()}
    const activeElement = {blur: vi.fn()}
    const getActiveElementMock = vi.spyOn(document, 'activeElement', 'get')
    getActiveElementMock.mockReturnValue(activeElement)
    lastEventCallback(event)
    expect(event.stopPropagation).toHaveBeenCalled()
    expect(event.preventDefault).not.toHaveBeenCalled()
    expect(document.activeElement.blur).not.toHaveBeenCalled()
  })
})
