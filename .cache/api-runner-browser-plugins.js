module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":2048},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[],"modulePath":"D:\\project-IDA\\IDA-projects/src/cms/cms.js","enableIdentityWidget":true,"htmlTitle":"Application Integration your business"},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#00d1b2","showSpinner":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"id":"","includeInDevelopment":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Integration application cloud","short_name":"Business","start_url":"/index.html","background_color":"#ffffff","theme_color":"#00d1b2","display":"standalone","icons":[{"src":"/icons/partner_logo_integration_cloud.png","sizes":"192x192","type":"image/png"},{"src":"/icons/partner_logo_integration_cloud.png","sizes":"512x512","type":"image/png"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
