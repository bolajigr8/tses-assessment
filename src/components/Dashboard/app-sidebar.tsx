'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Shield } from 'lucide-react'
import Image from 'next/image'
import { GENERAL_NAV_ITEMS, MAIN_NAV_ITEMS } from '@/constants/nav-items'

interface AppSidebarProps {
  className?: string
}

const AppSidebar: React.FC<AppSidebarProps> = ({ className }) => {
  const pathname = usePathname()

  return (
    <aside
      className={`hidden lg:flex lg:flex-col lg:w-60 bg-white border-r border-gray-200 ${className}`}
    >
      {/* Header with Logo */}
      <div className='h-16 flex items-center px-6 border-b border-gray-100'>
        <Link href='/dashboard' className='flex items-center gap-2.5'>
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

      {/* Main Content */}
      <div className='flex-1 px-3 py-5 overflow-y-auto'>
        {/* Main Navigation */}
        <nav className='space-y-1'>
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.url || pathname.startsWith(item.url + '/')
            return (
              <Link
                key={item.title}
                href={item.url}
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
        <div className='mt-8'>
          <nav className='space-y-1'>
            {GENERAL_NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.url || pathname.startsWith(item.url + '/')
              return (
                <Link
                  key={item.title}
                  href={item.url}
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
    </aside>
  )
}

export default AppSidebar
