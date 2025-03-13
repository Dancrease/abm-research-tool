const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/hunter',
    createProxyMiddleware({
      target: 'https://api.hunter.io',
      changeOrigin: true,
      pathRewrite: { '^/hunter': '' },
    })
  );

  app.use(
    '/news',
    createProxyMiddleware({
      target: 'https://newsapi.org',
      changeOrigin: true,
      pathRewrite: { '^/news': '' },
    })
  );
};