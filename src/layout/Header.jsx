import { Camera, Menu, Search, ShoppingCart, User } from 'lucide-react'
import React, { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='p-9'>
      <div className='flex justify-between'>
        <h3>Bandage</h3>
        <div className='flex gap-6 items-center'>
          <div className='hover:bg-gray-400 rounded-full p-1'>
            <User />
          </div>
          <div className='hover:bg-gray-400 rounded-full p-1'>
            <Search />
          </div>
          <div className='hover:bg-gray-400 rounded-full p-1'>
            <ShoppingCart />
          </div>
          <div onClick={()=>setMenuOpen((prev)=>!prev)} className='hover:bg-gray-400  rounded-full p-1'>
            <Menu />
          </div>
        </div>
      </div>
      <div className={`text-second-text-color ${menuOpen?"flex":"hidden"} justify-center py-24 text-3xl transition-all`}>
        <nav >
          <ul className='flex flex-col gap-8'>
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
