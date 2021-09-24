import React from 'react'
import moc from '../images/floatingBao.png'

const FloatingImage = () => {
  return (
    <div className="floatingWrapper" style={{ maxWidth: '700px' }}>
      <img src={moc} className="floatingImage" alt="Awesome Image" />
    </div>
  )
}

export default FloatingImage
