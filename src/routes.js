// next routes for dynamic routing
const routes = module.exports = require('next-routes')();

routes
  .add({ name: 'home', pattern: '/', page: 'home' })
  .add({ name: 'blogs', pattern: '/blogs', page: 'blogs'})
  .add({ name: 'blog', pattern: '/blog/:slug', page: 'blog'})
  .add({ profile: 'profile', pattern: '/profile/slug', page: 'profile'})