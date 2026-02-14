import Link from 'next/link'
import { Bell, User } from 'lucide-react'
import { NAV_LINKS } from '@/constants/data'
import { cn } from '@/lib/utils'

export function Header() {
  return (
    <header className='bg-white border-b border-gray-200 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center gap-8'>
            <h1 className='text-xl font-bold text-primary'>LMS</h1>
            <nav className='flex items-center gap-1'>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                    link.active
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className='flex items-center gap-4'>
            <button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
              <Bell className='h-5 w-5 text-gray-600' />
            </button>
            <button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
              <User className='h-5 w-5 text-gray-600' />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
