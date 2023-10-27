const config = {
  stories: ['../lib/**/*.story.@(js|jsx)'],
  staticDirs: [],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-styling'],
  framework: {name: '@storybook/react-vite', options: {}},
  docs: {autodocs: 'tag'},
}
export default config
