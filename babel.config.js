module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'view-design',
      libraryDirectory: 'src/components',
    }, 'view-design'],
    ['import', {
      libraryName: 'muse-ui',
      libraryDirectory: 'lib',
      camel2DashComponentName: false
    }, 'muse-ui']
  ]
}
