import * as React from 'react'

import { Color } from '../../styles/base'

import PhotoModal from './components/photo-modal'
import ImageGrid from './components/image-grid'

interface PhotoGalleryProps {
  images: string[]
}
interface PhotoGalleryState {
  modalOpen: boolean
  selectedPhotoIndex: number
}
class PhotoGallery extends React.Component<PhotoGalleryProps, PhotoGalleryState> {
  constructor(props: PhotoGalleryProps) {
    super(props)

    this.state = { 
      modalOpen: false, 
      selectedPhotoIndex: 0
    } 
  }

  selectImage = (idx: number) => {
    this.setState({ modalOpen: true, selectedPhotoIndex: idx })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    return (
      <>
      <PhotoModal 
        open={this.state.modalOpen} 
        closeModal={this.closeModal}
        images={this.props.images}
        startIndex={this.state.selectedPhotoIndex}
      />
      <div
        style={{
          background: Color.DARK_GREY,
          padding: '1rem 2rem'
        }}
      ><ImageGrid images={this.props.images} selectImage={this.selectImage}/>
      </div>
      </>
    )
  }
}

export default PhotoGallery