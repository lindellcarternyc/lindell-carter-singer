export interface Route {
  name: string
  path: string
}

export const Routes: Route[] = [
  {
    name: 'Home', path: '/'
  },
  {
    name: 'About', path: '/about',
  },
  {
    name: 'Calendar', path: '/calendar'
  },
  {
    name: 'Gallery', path: '/gallery'
  },
  {
    name: 'Watch & Listen', path: '/media'
  },
  {
    name: 'Contact', path: '/contact'
  }
]