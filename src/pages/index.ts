import HomePage from './HomePage'
import CalendarPage from './CalendarPage'
import ContactPage from './ContactPage'
import PhotoGalleryPage from './PhotoGalleryPage'
import ComingSoonPage from './ComingSoonPage'

export interface PageRoute {
  name: string
  path: string
}

const PAGE_ROUTES = {
  HOME: {
    name: 'Home',
    path: '/',
  },
  ABOUT: {
    name: 'About',
    path: '/about',
  },
  CALENDAR: {
    name: 'Calendar',
    path: '/calendar'
  },
  GALLERY: {
    name: 'Gallery',
    path: '/gallery',
  },
  WATCH_AND_LISTEN: {
    name: 'Watch & Listen',
    path: '/media',
  },
  CONTACT: {
    name: 'Contact',
    path: '/contact',
  }
}

export {
  HomePage,
  CalendarPage,
  ContactPage,
  PhotoGalleryPage,
  ComingSoonPage,
  PAGE_ROUTES
}