'use client'

import { ReactNode } from 'react'
import AppHeader from './app-header'
import AppSidebar from './app-sidebar'

interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  fullName?: string
  avatar?: string
  role?: string
}

interface DashboardLayoutProps {
  children: ReactNode
  user: User
  className?: string
}

export default function DashboardLayout({
  children,
  user,
  className = '',
}: DashboardLayoutProps) {
  return (
    <div className='flex h-screen overflow-hidden bg-gray-50'>
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content Area */}
      <div className='flex flex-col flex-1 overflow-hidden'>
        {/* Header */}
        <AppHeader user={user} />

        {/* Page Content */}
        <main className={`flex-1 overflow-y-auto ${className}`}>
          {children}
        </main>
      </div>
    </div>
  )
}
