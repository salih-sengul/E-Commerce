import { MenuButton, Menu, MenuItems, MenuItem } from '@headlessui/react'
import {
  Camera,
  ChevronRight,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MenuIcon,
  Phone,
  Search,
  ShoppingCart,
  Twitter,
  User,
  Youtube
} from 'lucide-react'
import React, { useState } from 'react'
import DropdownMenu from '../components/DropdownMenu'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setdropdownOpen] = useState(false)

  return (
    <div className=''>
      <div className=''>
        <div className='bg-text-color text-light-text-color '>
          <div className='hidden lg:flex lg: justify-between h-[58px] items-center max-w-[1440px] mx-auto font-semibold text-sm p-6'>
            <div className='flex gap-4'>
              <div className='flex gap-1'>
                <Phone />
                <span>(225) 555-0118</span>
              </div>
              <div className='flex gap-1'>
                <Mail />
                <span>michelle.rivera@example.com</span>
              </div>
            </div>
            <div>Follow Us and get a chance to win 80% off</div>
            <div className='flex gap-4'>
              Follow Us :
              <ul className='flex gap-2 items-center'>
                <li>
                  <a href=''>
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <Youtube />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href=''>
                    <Twitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex  max-w-[1440px] mx-auto p-9 lg:p-6'>
          <h3 className='w-[187px]'>Bandage</h3>
          <div className='flex lg:justify-between justify-end w-full'>
            <nav className='lg:flex items-center hidden '>
              <ul className='flex gap-5 font-semibold text-sm'>
                <li>
                  <a href=''>Home</a>
                </li>
                <li>
                  <DropdownMenu />
                </li>
                <li>
                  <a href=''>About</a>
                </li>
                <li>
                  <a href=''>Blog</a>
                </li>
                <li>
                  <a href=''>Contact</a>
                </li>
                <li>
                  <a href=''>Pages</a>
                </li>
              </ul>
            </nav>

            <div>
              <div className='flex gap-6 items-center lg:text-primary-color'>
                <div className=' p-1 flex gap-2 items-center'>
                  <User className='hover:bg-gray-300 rounded-full lg:size-4'/>
                  <a href="" className='text-primary-color link hidden lg:inline'>Login / Register</a>
                </div>
                <div className='hover:bg-gray-300 rounded-full p-1'>
                  <Search className='lg:size-4'/>
                </div>
                <div className='hover:bg-gray-300 rounded-full p-1 md:flex md:gap-1 flex items-center'>
                  <ShoppingCart className='lg:size-4'/>
                  <span className='hidden lg:inline'>1</span>
                </div>
                <div
                  onClick={() => setMenuOpen(prev => !prev)}
                  className='hover:bg-gray-300  rounded-full p-1 lg:hidden '
                >
                  <MenuIcon />
                </div>
                <div
                  onClick={() => setMenuOpen(prev => !prev)}
                  className='hover:bg-gray-300  rounded-full p-1 hidden lg:flex md:gap-1 flex items-center'
                >
                  <Heart className='lg:size-4'/>
                  <span className='hidden lg:inline'>1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`text-second-text-color ${
            menuOpen ? 'flex' : 'hidden'
          } justify-center py-24 text-3xl transition-all`}
        >
          <nav>
            <ul className='flex flex-col gap-8'>
              <li>Home</li>
              <li>Product</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
