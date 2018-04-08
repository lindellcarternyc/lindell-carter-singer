import * as React from 'react'

import PageLayout from '../components/PageLayout'
import PhotoGallery from '../components/photo-gallery/PhotoGallery'

const PhotoGalleryPage = (): JSX.Element => {
  return (
    <PageLayout title="Gallery">
      <PhotoGallery />
    </PageLayout>
  )
}

export default PhotoGalleryPage