const config = require('./config')

module.exports = {
  pathPrefix: config.pathPrefix,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false // use svgo to optimize SVGs (default)
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images'
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 64
      }
    }
  ]
}
