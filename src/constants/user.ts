export interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  fullName?: string
  avatar?: string
  role?: string
  roleIdentifier?: string
  profileType?: string
  profile?: {
    avatar?: string
  }
}

export interface Course {
  id: string
  title: string
  description: string
  image: string
  category: string
  enrollments: number
  completion: number
}

export interface NavItem {
  title: string
  url: string
  icon: any
}
