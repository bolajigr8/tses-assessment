'use client'

import { useState } from 'react'
import {
  Bell,
  Menu,
  X,
  ChevronDown,
  Search,
  ExternalLink,
  MessageSquareMore,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import MobileMenu from './mobile-menu'

interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  fullName?: string
  avatar?: string
  role?: string
}

interface AppHeaderProps {
  user: User
}

const AppHeader = ({ user }: AppHeaderProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = async () => {
    // Logout logic here
    router.push('/auth/login')
  }

  const fullName =
    user.fullName || `${user.firstName} ${user.lastName}` || 'User'
  const initials = fullName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <header className='sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between gap-4 bg-white border-b border-gray-200 px-4 lg:px-6'>
      {/* Left Section - Logo (Mobile) */}
      <div className='flex items-center gap-3 lg:hidden'>
        <Link href='/dashboard' className='flex items-center gap-2'>
          <div className='relative w-30 h-30'>
            <Image
              src='/Soludesks.png'
              alt='Solusdesks'
              fill
              className='object-contain'
            />
          </div>
        </Link>
      </div>

      {/* Center Section - Search Bar (Desktop) */}
      <div className='hidden lg:flex items-center flex-1 max-w-md'>
        <div className='relative w-full'>
          <Search className='absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
          <input
            type='text'
            placeholder='Search soludesk'
            className='w-full pr-10 pl-4 py-2 text-[13px] bg-gray-50 border border-gray-200  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white placeholder:text-gray-400 rounded-2xl'
          />
        </div>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-2'>
        {/* Mobile Menu Toggle */}
        <button
          type='button'
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label='Toggle navigation menu'
          className='lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors'
        >
          {isMenuOpen ? (
            <X className='w-5 h-5 text-gray-700' />
          ) : (
            <Menu className='w-5 h-5 text-gray-700' />
          )}
        </button>

        {/* External Link Icon */}
        <button className='hidden lg:flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors'>
          <MessageSquareMore className='text-blue-500  w-5 h-5 ' />
        </button>

        {/* Notification Bell */}
        <button className='flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors relative'>
          <Bell className='w-4.5 h-4.5 text-gray-600' />
          <span className='absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white' />
        </button>

        {/* User Profile Dropdown */}
        <div className='relative'>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className='flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors'
          >
            <div className='relative w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-[11px] font-semibold overflow-hidden'>
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={fullName}
                  fill
                  className='object-cover'
                />
              ) : (
                <span>{initials}</span>
              )}
            </div>

            {/* User Info - Desktop */}
            <div className='hidden lg:flex flex-col items-start min-w-0'>
              <span className='text-[13px] font-medium text-gray-900 leading-tight truncate max-w-30'>
                {fullName}
              </span>
              <span className='text-[11px] text-gray-500 leading-tight'>
                Moderator/Instructor
              </span>
            </div>

            {/* Dropdown Chevron */}
            <ChevronDown className='hidden lg:block w-4 h-4 text-gray-400 shrink-0' />
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <>
              <div
                className='fixed inset-0 z-10'
                onClick={() => setIsProfileOpen(false)}
              />
              <div className='absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20'>
                <div className='px-4 py-3 border-b border-gray-100'>
                  <p className='text-[13px] font-medium text-gray-900 truncate'>
                    {fullName}
                  </p>
                  <p className='text-[11px] text-gray-500 truncate'>
                    {user.email}
                  </p>
                </div>
                <Link
                  href='/profile'
                  className='block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50'
                  onClick={() => setIsProfileOpen(false)}
                >
                  View Profile
                </Link>
                <Link
                  href='/settings'
                  className='block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-50'
                  onClick={() => setIsProfileOpen(false)}
                >
                  Settings
                </Link>
                <div className='border-t border-gray-100 mt-1 pt-1'>
                  <button
                    onClick={handleLogout}
                    className='block w-full text-left px-4 py-2 text-[13px] text-red-600 hover:bg-gray-50'
                  >
                    Log out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  )
}

export default AppHeader
