import { Camera, User } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
        <p>Bandage</p>
        <div>
          <div>
            <Camera color="red" size={48} />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Header