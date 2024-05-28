var plugins = [{
      plugin: require('/home/haruxe/Projects/bao-landing/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr'),
      options: {"plugins":[],"siteUrl":"https://bao.finance"},
    },{
      plugin: require('/home/haruxe/Projects/bao-landing/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","createLinkInHead":true},
    },{
      plugin: require('/home/haruxe/Projects/bao-landing/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/haruxe/Projects/bao-landing/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('/home/haruxe/Projects/bao-landing/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"default":"/home/haruxe/Projects/bao-landing/src/layouts/index.js"},"remarkPlugins":[null],"rehypePlugins":[null],"gatsbyRemarkPlugins":["gatsby-remark-embedder","gatsby-remark-copy-linked-files","gatsby-remark-autolink-headers",{"resolve":"gatsby-remark-twitter-cards","options":{"title":"Bao Finance","separator":"|","author":"@thebaoman","background":"/home/haruxe/Projects/bao-landing/static/images/twitter_card_bg.jpg","fontColor":"#50251c","fontStyle":"sans-serif","titleFontSize":124,"fontFile":"/home/haruxe/Projects/bao-landing/static/fonts/GT-Haptik-Regular.ttf"}},"gatsby-remark-smartypants",{"resolve":"gatsby-remark-images","options":{"maxWidth":1200,"showCaptions":true}}],"lessBabel":false,"mediaTypes":["text/markdown","text/x-markdown"],"root":"/home/haruxe/Projects/bao-landing"},
    },{
      plugin: require('/home/haruxe/Projects/bao-landing/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/fav.ico","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"fd68c08287c0a1bf065534cd44890c44"},
    },{
      plugin: require('/home/haruxe/Projects/bao-landing/gatsby-ssr'),
      options: {"plugins":[]},
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
