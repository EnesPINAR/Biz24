const ld = require('lodash')
module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./main/templates/index.html'],
      safelist: {
        standard: [
          /html/,
          /body/,
          /inset/,
          /translate/,
          /transform/,
          /\//
        ],
      },
      extractors: [
        {
          // extractor: (content) => content.match(/[\w\-:.\/\[#%\]]+(?<!:)/g) || [],
          extractor: (content) => {
              // Capture as liberally as possible, including things like `h-(screen-1.5)`
              const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
              const broadMatchesWithoutTrailingSlash = broadMatches.map((match) => ld.trimEnd(match, '\\'))

              // Capture classes within other delimiters like .block(class="w-1/2") in Pug
              const innerMatches = content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || []

              return broadMatches.concat(broadMatchesWithoutTrailingSlash).concat(innerMatches)
          },
          extensions: ["html"]
        }
      ]
    },
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}