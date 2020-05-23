// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass'),
        // or if you use scss
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, './src/assets/sass/*.sass'),
        // or scss
        path.resolve(__dirname, './src/assets/sass/*.scss'),
      ],
    })
}

module.exports = {
  icon: {
    favicon: './src/favicon.png'
  },
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
	},
  siteName: 'Cheryl Cruz',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'works/**/*.md',
        typeName: 'WorkPost', // remember this name
        route: '/works/:title'  // customise to your liking.
      }
    },
    {
      use: 'gridsome-plugin-svg',
      options: {
      // default options below
      goesBothWays: false,
      svgo: [
        {
          removeTitle: false
        },
        {
          prefixIds: {
            prefix: (_, {path}) => basename(path, '.svg'),
            delim: '-',
          },
        },
        {
          removeDesc: false
        },
        {
          removeViewBox: false,
        },
        {
          sortAttrs: true,
        }
        ],
      }
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      achorClassName: 'icon icon-link',
      plugins: [

      ]
    }
  }
}
