export const STATS = [
  {
    id: 'total-courses',
    label: 'Total courses',
    value: 123,
    icon: 'book-open',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    id: 'total-enrollments',
    label: 'Total Enrollments',
    value: 111,
    icon: 'graduate-cap',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    id: 'avg-completion',
    label: 'Avg Completion',
    value: '99%',
    trend: '+2% vs last month',
    icon: 'list-up',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
]

export const COURSES = [
  {
    id: 1,
    title: 'Effective Workplace Communication',
    description:
      'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Soft Skill',
    image: '/images/course-1.jpg',
    categoryColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 2,
    title: 'Mastering Interpersonal Skills',
    description:
      'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Compliance & Policy',
    image: '/images/course-2.jpg',
    categoryColor: 'bg-purple-100 text-purple-700',
  },
  {
    id: 3,
    title: 'Strengthening Team Cohesion',
    description:
      'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Soft Skill',
    image: '/images/course-3.jpg',
    categoryColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 4,
    title: 'Enhancing Team Dialogue',
    description:
      'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Digital Skills',
    image: '/images/course-4.jpg',
    categoryColor: 'bg-green-100 text-green-700',
  },
  {
    id: 5,
    title: 'Optimizing Group Dynamics',
    description:
      'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Business & Strategy',
    image: '/images/course-5.jpg',
    categoryColor: 'bg-amber-100 text-amber-700',
  },
  {
    id: 6,
    title: 'Cultivating Open Communication',
    description:
      'Upon completion of this module, participants will: Implement practical communication techniques, a...',
    category: 'Onboarding',
    image: '/images/course-6.jpg',
    categoryColor: 'bg-pink-100 text-pink-700',
  },
]

export const CATEGORIES = [
  { value: 'all', label: 'All Categories' },
  { value: 'soft-skill', label: 'Soft Skill' },
  { value: 'compliance', label: 'Compliance & Policy' },
  { value: 'digital-skills', label: 'Digital Skills' },
  { value: 'business', label: 'Business & Strategy' },
  { value: 'onboarding', label: 'Onboarding' },
]

export const ITEMS_PER_PAGE = [10, 20, 30, 40, 50]

export const NAV_LINKS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/courses', label: 'Courses', active: true },
  { href: '/analytics', label: 'Analytics' },
  { href: '/users', label: 'Users' },
  { href: '/settings', label: 'Settings' },
]
