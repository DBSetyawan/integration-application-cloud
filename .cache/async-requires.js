// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-js": () => import("./../src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */),
  "component---src-templates-contact-page-js": () => import("./../src/templates/contact-page.js" /* webpackChunkName: "component---src-templates-contact-page-js" */),
  "component---src-templates-about-page-js": () => import("./../src/templates/about-page.js" /* webpackChunkName: "component---src-templates-about-page-js" */),
  "component---src-templates-pricing-page-js": () => import("./../src/templates/pricing-page.js" /* webpackChunkName: "component---src-templates-pricing-page-js" */),
  "component---src-templates-home-page-js": () => import("./../src/templates/home-page.js" /* webpackChunkName: "component---src-templates-home-page-js" */),
  "component---src-templates-article-page-js": () => import("./../src/templates/article-page.js" /* webpackChunkName: "component---src-templates-article-page-js" */),
  "component---src-templates-tags-js": () => import("./../src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-success-index-js": () => import("./../src/pages/contact/success/index.js" /* webpackChunkName: "component---src-pages-contact-success-index-js" */),
  "component---src-pages-tags-index-js": () => import("./../src/pages/tags/index.js" /* webpackChunkName: "component---src-pages-tags-index-js" */)
}

