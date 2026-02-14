'use client'

import DashboardLayout from '@/components/Dashboard/dashboard-layout'
import { ReactNode } from 'react'

// Example mock user data
const mockUser = {
  id: '1',
  email: 'madison.greg@example.com',
  firstName: 'Madison',
  lastName: 'Greg',
  fullName: 'Madison Greg',
  avatar: '',
  role: 'Moderator/Instructor',
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout user={mockUser}>
      <div className=''>{children}</div>
    </DashboardLayout>
  )
}
