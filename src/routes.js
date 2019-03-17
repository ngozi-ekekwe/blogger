// next routes for dynamic routing
const routes = module.exports = require('next-routes')();

routes
  .add({ name: 'home', pattern: '/', page: 'home' })
  .add({ name: 'blog', pattern: '/blog/:slug', page: 'blog'})
  .add({ name: 'blogs', pattern: '/blogs', page: 'blogs'})
  .add({ profile: 'profile', pattern: '/profile/:slug', page: 'profile'})
  .add({ profile: 'login', pattern: '/login', page: 'login'})
  .add({ profile: 'signup', pattern: '/signup', page: 'signup'})
  .add({ profile: 'new-story', pattern: '/new-story', page: 'new-story'})
