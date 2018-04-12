import * as React from 'react'

import { Breakpoint, makeResponsiveComponent } from '../../../utils/responsive'

import Modal from '../../../Modal'
import Controls, { ControlAction } from './components/controls'

interface PhotoModalProps {
  open: boolean
  closeModal: () => void
  images: string[]
  startIndex: number
  breakpoint?: Breakpoint
}
interface PhotoModalState {
  currentIndex: number
}
class PhotoModal extends React.Component<PhotoModalProps, PhotoModalState> {
  constructor(props: PhotoModalProps) {
    super(props)

    this.state = { currentIndex: props.startIndex }
  }

  componentWillReceiveProps(nextProps: PhotoModalProps) {
    if (this.props.startIndex !== nextProps.startIndex) {
      this.setState({ currentIndex: nextProps.startIndex })
    }
  }

  handleAction = (action: ControlAction) => {
    if (action === ControlAction.Previous) {
      this._previous()
    } else if ( action === ControlAction.Next ) {
      this._next()
    }
  }

  get width(): string {
    const breakpoint = this.props.breakpoint || Breakpoint.Phone
    
    let rem: number
    if ( breakpoint >= Breakpoint.Phablet ) {
      rem = 4
    } else {
      rem = 2
    }

    return `calc(100% - ${rem}rem)`
  }

  get padding(): string {
    const { breakpoint } = this.props
    if ( breakpoint && breakpoint >= Breakpoint.Phablet ) {
      return '2rem'
    } else {
      return '1rem'
    }
  }

  render() {
    return (
      <Modal open={this.props.open} closeModal={this.props.closeModal}>
        <div 
          style={{
            width: this.width, 
            maxWidth: '800px',
            maxHeight: '(100vh - 4rem)',
            position: 'absolute',
            top: '50%', left: '50%',
            background: 'white',
            transform: 'translate(-50%, -50%)',
            padding: this.padding,
            opacity: this.props.open ? 1 : 0,
            transition: 'opacity 0.3s ease-in'
          }}
          onClick={(evt: React.SyntheticEvent<HTMLElement>) => {
            evt.stopPropagation()
          }}
        ><img 
          src={this.props.images[this.state.currentIndex]} 
          width="100%"
          style={{marginBottom: '1rem'}}
          onClick={this._next}
        />
        <Controls 
          currentIndex={this.state.currentIndex} 
          dataCount={this.props.images.length}
          handleAction={this.handleAction}
        />
        </div>
      </Modal>
    )
  }

  private _next = () => {
    this.setState(({ currentIndex }) => {
      if ( currentIndex < this.props.images.length - 1) {
        return { currentIndex: currentIndex + 1 }
      }
      return {
        currentIndex: 0
      }
    })
  }

  private _previous = () => {
    this.setState(({ currentIndex }) => {
      if ( currentIndex > 0 ) {
        return {
          currentIndex: currentIndex - 1
        }
      } else {
        return {
          currentIndex: this.props.images.length - 1
        }
      }
    })
  }
}

export default makeResponsiveComponent(PhotoModal)