const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  webpack(config, options) {
    return config
  }
})

module.exports = {
  env: {
    PRISMIC_URL: process.env.PRISMIC_URL,
    PRISMIC_TOKEN: process.env.PRISMIC_TOKEN,
    NOTION_URI: process.env.NOTION_URI,
    NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN,
    NOTION_PROJECTS_DB_ID: process.env.NOTION_PROJECTS_DB_ID,
    NOTION_SOCIAL_NETWORK_DB_ID: process.env.NOTION_SOCIAL_NETWORK_DB_ID,
    NOTION_EXPERIENCES_DB_ID_DB_ID: process.env.NOTION_EXPERIENCES_DB_ID_DB_ID,
    VERCEL_REDEPLOY_URL: process.env.VERCEL_REDEPLOY_URL,
    VERCEL_REDEPLOY_TOKEN: process.env.VERCEL_REDEPLOY_TOKEN,
    NOTION_ABOUT_DB_ID: process.env.NOTION_ABOUT_DB_ID,
  }
}

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
