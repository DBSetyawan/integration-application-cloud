var plugins = [{
      plugin: require('D:/project-IDA/IDA-projects/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/project-IDA/IDA-projects/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/project-IDA/IDA-projects/node_modules/gatsby-plugin-google-tagmanager/gatsby-ssr'),
      options: {"plugins":[],"id":"","includeInDevelopment":false},
    },{
      plugin: require('D:/project-IDA/IDA-projects/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Integration application cloud","short_name":"Business","start_url":"/index.html","background_color":"#ffffff","theme_color":"#00d1b2","display":"standalone","icons":[{"src":"/icons/partner_logo_integration_cloud.png","sizes":"192x192","type":"image/png"},{"src":"/icons/partner_logo_integration_cloud.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('D:/project-IDA/IDA-projects/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('D:/project-IDA/IDA-projects/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"query":"\n                {\n                  site {\n                    siteMetadata {\n                      rssMetadata {\n                        site_url\n                        feed_url\n                        title\n                        description\n                        image_url\n                        author\n                        copyright\n                      }\n                    }\n                  }\n                }\n              ","feeds":[{"query":"\n                    {\n                      allMarkdownRemark(\n                        limit: 1000,\n                        sort: { order: DESC, fields: [frontmatter___date] },\n                      ) {\n                        edges {\n                          node {\n                            excerpt(pruneLength: 400)\n                            html\n                            id\n                            fields { slug }\n                            frontmatter {\n                              title\n                              templateKey\n                              cover\n                              date(formatString: \"MMMM DD, YYYY\")\n                              tags\n                            }\n                          }\n                        }\n                      }\n                    }\n                  ","output":"/rss.xml","title":"Integration application cloud"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
