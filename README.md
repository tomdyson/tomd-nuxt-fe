# tomd.org frontend

Built in Nuxt, using static site generation, hosted on Netlify. The backend is Wagtail, at https://github.com/tomdyson/tomd.

The same site is hosted twice: one in SSG mode, for production, and the other in SPA mode, for previews. They are built with slightly different commands:

### SSG site

`yarn build && yarn export && wget -O dist/_redirects https://tomd-wagtail.herokuapp.com/netlify/redirects && cat prod_redirects >> dist/_redirects`

### SPA site

`yarn build-spa && yarn export && mv spa_redirects dist/_redirects`

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Todo
- [x] Support embeds
- [x] Download Source Serif Pro, which now has italics.
- [x] Headless preview
- [ ] Responsive embeds
- [ ] Twitter cards
- [ ] Optional image captions