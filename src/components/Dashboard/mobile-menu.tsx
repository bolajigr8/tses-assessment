'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GENERAL_NAV_ITEMS, MAIN_NAV_ITEMS } from '@/constants/nav-items'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = React.useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Focus trap inside menu when open
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll('a, button')
      if (focusableElements.length > 0) {
        ;(focusableElements[0] as HTMLElement).focus()
      }
    }
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 right-0 w-70 bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex flex-col h-full overflow-y-auto'>
          {/* Main Navigation */}
          <div className='flex-1 px-3 py-5'>
            <nav className='space-y-1'>
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.url || pathname.startsWith(item.url + '/')
                return (
                  <Link
                    key={item.title}
                    href={item.url}
                    onClick={onClose}
                    className={`
                      flex items-center gap-3 h-10 px-3 rounded-lg text-[13.5px] font-medium
                      transition-all duration-200 ease-in-out
                      ${
                        isActive
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }
                    `}
                  >
                    <item.icon
                      className={`w-4.5 h-4.5 shrink-0 ${
                        isActive ? 'text-blue-600' : 'text-gray-500'
                      }`}
                      strokeWidth={2}
                    />
                    <span className='leading-none'>{item.title}</span>
                  </Link>
                )
              })}
            </nav>

            {/* General Section */}
            <div className='mt-6 pt-6 border-t border-gray-100'>
              <nav className='space-y-1'>
                {GENERAL_NAV_ITEMS.map((item) => {
                  const isActive =
                    pathname === item.url || pathname.startsWith(item.url + '/')
                  return (
                    <Link
                      key={item.title}
                      href={item.url}
                      onClick={onClose}
                      className={`
                        flex items-center gap-3 h-10 px-3 rounded-lg text-[13.5px] font-medium
                        transition-all duration-200 ease-in-out
                        ${
                          isActive
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }
                      `}
                    >
                      <item.icon
                        className={`w-4.5 h-4.5 shrink-0 ${
                          isActive ? 'text-blue-600' : 'text-gray-500'
                        }`}
                        strokeWidth={2}
                      />
                      <span className='leading-none'>{item.title}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
