import * as React from 'react'

import { Switch, Route } from 'react-router-dom'

import {
  HomePage, ContactPage, CalendarPage, PhotoGalleryPage,
  ComingSoonPage,
  PAGE_ROUTES
} from '../pages'

const Main = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={PAGE_ROUTES.HOME.path} component={HomePage} />
      <Route 
        path={PAGE_ROUTES.ABOUT.path}
        render={() => {
          return (
            <ComingSoonPage title={PAGE_ROUTES.ABOUT.name} />
          )
        }}
      />
      <Route path={PAGE_ROUTES.CONTACT.path} component={ContactPage} />
      <Route path={PAGE_ROUTES.CALENDAR.path} component={CalendarPage} />
      <Route path={PAGE_ROUTES.GALLERY.path} component={PhotoGalleryPage} />
      <Route 
        path={PAGE_ROUTES.WATCH_AND_LISTEN.path} 
        render={() => {
          return(
            <ComingSoonPage title={PAGE_ROUTES.WATCH_AND_LISTEN.name} />
          )
        }}
      />
    </Switch>
  )
}

export default Main