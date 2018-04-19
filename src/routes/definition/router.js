let router = {
  frontend: [
    { route: '/', view: '/home/home.route', action: 'index' },
    { route: '/robots.txt', view: '/seo/seo.route', action: 'robots' },
    { route: '/sitemap/master.xml', view: '/seo/seo.route', action: 'sitemapMaster' },
    { route: '/sitemap/latest.xml', view: '/seo/seo.route', action: 'sitemapLatest' }
  ],
  api: [
    { route: '/Status', controller: '/status/status.route', action: 'get', method: 'GET' }
  ]
}

module.exports = router