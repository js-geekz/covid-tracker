const postCssImport = require('postcss-import')
const postMixins = require('postcss-mixins')
const postCssNested = require('postcss-nested')
const postCssSimpleVars = require('postcss-simple-vars')
const postCssAutoprefixer = require('autoprefixer')

module.exports = {
  plugins: [postCssImport, postMixins, postCssNested, postCssSimpleVars, postCssAutoprefixer]
}
