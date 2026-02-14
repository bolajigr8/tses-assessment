import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  Award,
  Settings,
  LucideIcon,
} from 'lucide-react'

export interface NavItem {
  title: string
  url: string
  icon: LucideIcon
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/teacher/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Courses/Materials',
    url: '/teacher/courses',
    icon: BookOpen,
  },
  {
    title: 'Classes',
    url: '/teacher/classes',
    icon: ClipboardList,
  },
  {
    title: 'Assessments',
    url: '/teacher/assessments',
    icon: ClipboardList,
  },
  {
    title: 'My Certification',
    url: '/teacher/certification',
    icon: Award,
  },
]

export const GENERAL_NAV_ITEMS: NavItem[] = [
  {
    title: 'Settings',
    url: '/teacher/settings',
    icon: Settings,
  },
]

// User profile subtitle
export const USER_SUBTITLE = 'Moderator/Instructor'
