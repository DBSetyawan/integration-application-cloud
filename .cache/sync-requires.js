const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("D:\\project-IDA\\IDA-projects\\node_modules\\gatsby-plugin-offline\\app-shell.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("D:\\project-IDA\\IDA-projects\\src\\templates\\blog.js"))),
  "component---src-templates-home-page-js": hot(preferDefault(require("D:\\project-IDA\\IDA-projects\\src\\templates\\home-page.js"))),
  "component---src-templates-about-page-js": hot(preferDefault(require("D:\\project-IDA\\IDA-projects\\src\\templates\\about-page.js"))),
  "component---src-templates-contact-page-js": hot(preferDefault(require("D:\\project-IDA\\IDA-projects\\src\\templates\\contact-page.js"))),
  "component---src-templates-pricing-page-js": hot(preferDefault(require("D:\\project-IDA\\IDA-projects\\src\\templates\\pricing-page.js"))),
  "component---src-templates-article-page-js": hot(preferDefault(require("D:\\project-IDA\\IDA-projects\\src\\templates\\article-page.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("D:\\project-IDA\\IDA-projects\\src\\templates\\tags.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\project-IDA\\IDA-projects\\src\\pages\\404.js"))),
  "component---src-pages-contact-success-index-js": hot(preferDefault(require("D:\\project-IDA\\IDA-projects\\src\\pages\\contact\\success\\index.js"))),
  "component---src-pages-tags-index-js": hot(preferDefault(require("D:\\project-IDA\\IDA-projects\\src\\pages\\tags\\index.js")))
}

