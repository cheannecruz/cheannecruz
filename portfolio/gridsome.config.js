// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Cheryl Cruz',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'work/**/*.md',
        typeName: 'WorkPost', // remember this name
        route: '/works/:title'  // customise to your liking.
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
